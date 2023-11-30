import { useEffect, useState } from "react";
import Babysitter from "../components/Babysitter";
import useGetRequest from "../services/useGetRequest";
import TokenManager from "../auth/TokenManager";
import styles from "./BabysitterPage.module.css";
import Button from "../components/Button";

const BabysittersPage = () => {
  const [babysitterData, fetchBabysitters] = useGetRequest(
    "/babysitters",
    TokenManager.getAccessToken()
  );
  const [sortedData, setSortedData] = useState(babysitterData);
  const [isSortedActive, setIsSortedActive] = useState(false);

  useEffect(() => {
    if (!isSortedActive) {
      fetchBabysitters();
    }
  }, [isSortedActive]);

  const sortByAge = (babysitterData) => {
    const sortedBabysitters = new Map(
      [...babysitterData.entries()].sort((a, b) => b[1].age - a[1].age)
    );
    setSortedData(sortedBabysitters);
    setIsSortedActive(true);
  };

  const sortByPoints = (babysitterData) => {
    console.log(babysitterData);
    const sortedBabysitters = new Map(
      [...babysitterData.entries()].sort((a, b) => b[1].points - a[1].points)
    );
    setSortedData(sortedBabysitters);
    setIsSortedActive(true);
  };

  const displayData = isSortedActive ? sortedData : babysitterData;

  if (babysitterData.size === 0)
    return <p className={styles.loadingMessage}>Loading...</p>;

  return (
    <>
      <div className={styles.babysitterContainer}>
        {[...displayData.values()].map((babysitter) => (
          <div className={styles.babysitterData} key={babysitter.id}>
            <Babysitter babysitter={babysitter} />
          </div>
        ))}
        <Button
          text={"Sort by Age"}
          onClick={() => {
            sortByAge(displayData);
          }}
        />
        <Button
          text={"Sort by Points"}
          onClick={() => {
            sortByPoints(displayData);
          }}
        />
      </div>
    </>
  );
};

export default BabysittersPage;
