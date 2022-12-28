import styles from "./styles.module.css";
import mosquito from "../../assets/mosquito.png";
import heartFull from "../../assets/heartFull.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Jogo = () => {
  const navigate = useNavigate();

  const [time, setTime] = useState(5000);

  const [mosquitoState, setMosquitoState] = useState(null);

  const [lives, setLives] = useState(3);

  const randomMosquito = () => {
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
    if (mosquitoState?.active) {
      setLives((lives) => lives - 1);
    }
  }, [time]);

  useEffect(() => {
    if (lives < 0) {
      navigate("/derrota");
    }
  }, [navigate, lives]);

  useEffect(() => {
    if (time < 0) {
      navigate("/vitoria");
    }
  }, [time, navigate]);

  useEffect(() => {
    randomMosquito();

    const interval = setInterval(() => {
      randomMosquito();

      setTime((myTime) => myTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
          <img src={heartFull} alt="Imagem de um coração cheio" />
          <img src={heartFull} alt="Imagem de um coração cheio" />
          <img src={heartFull} alt="Imagem de um coração cheio" />
        </div>
        <div className={styles.stopwatch}>Tempo restante: {time}</div>
      </div>
    </div>
  );
};
