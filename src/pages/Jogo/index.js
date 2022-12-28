import styles from "./styles.module.css";
import mosquito from "../../assets/mosquito.png";
import heartFull from "../../assets/heartFull.png";
import heartEmpty from "../../assets/heartEmpty.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTimer } from "../../hooks/useTimer";

const defaultValuesDictionary = {
  normal: {
    lives: 3,
    gameTime: 40,
    mosquitoTime: 1500,
  },
  dificil: {
    lives: 2,
    gameTime: 50,
    mosquitoTime: 1000,
  },
  "chuck-norris": {
    lives: 1,
    gameTime: 60,
    mosquitoTime: 800,
  },
};

export const Jogo = () => {
  const params = useParams();

  const defaultValues =
    defaultValuesDictionary[params?.difficulty] ||
    defaultValuesDictionary.normal;

  const [mosquitoState, setMosquitoState] = useState(null);
  const [lives, setLives] = useState(defaultValues.lives);

  const navigate = useNavigate();

  const { time } = useTimer({ defaultTime: defaultValues.gameTime });
  const { time: generateMosquito } = useTimer({
    defaultInterval: defaultValues.mosquitoTime,
  });

  const randomMosquito = () => {
    if (mosquitoState?.active) {
      setLives((value) => value - 1);
    }

    const size = Math.floor(Math.random() * 30 + 40);
    const x = Math.floor(Math.random() * window.innerHeight) - 90;
    const y = Math.floor(Math.random() * window.innerWidth) - 90;

    setMosquitoState({
      active: true,
      position: {
        x: x < 0 ? 0 : x,
        y: y < 0 ? 0 : y,
      },
      size,
    });
  };

  useEffect(() => {
    if (lives < 0) {
      navigate("/derrota");
    }
  }, [navigate, lives]);

  useEffect(() => {
    if (time <= 0) {
      navigate("/vitoria");
    }
  }, [time, navigate]);

  useEffect(() => {
    randomMosquito();
  }, [generateMosquito]);

  const removeMosquito = () => {
    setMosquitoState({ ...mosquitoState, active: false });
  };

  return (
    <div>
      {mosquitoState?.active && (
        <img
          onClick={removeMosquito}
          src={mosquito}
          alt="Mosquito"
          width={mosquitoState.size}
          style={{
            position: "absolute",
            top: mosquitoState.position.x,
            left: mosquitoState.position.y,
          }}
        />
      )}

      <div className={styles.panel}>
        <div>
          <img
            src={lives >= 1 ? heartFull : heartEmpty}
            alt="Imagem de um coração"
          />
          <img
            src={lives >= 2 ? heartFull : heartEmpty}
            alt="Imagem de um coração"
          />
          <img
            src={lives >= 3 ? heartFull : heartEmpty}
            alt="Imagem de um coração"
          />
        </div>
        <div className={styles.stopwatch}>Tempo restante: {time}</div>
      </div>
    </div>
  );
};
