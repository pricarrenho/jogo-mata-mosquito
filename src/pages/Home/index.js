import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import game from "../../assets/game.png";
import { useState } from "react";
import { Button } from "../../components/Button";

export const Home = () => {
  const navigate = useNavigate();

  const options = ["Selecione o nível", "Normal", "Dificil", "Chuck Norris"];
  const [level, setLevel] = useState(options[0]);

  const handleChange = (event) => {
    setLevel(event.target.value);

    if (event.target.value === "Normal") {
      console.log("AQUI");
    }
  };

  return (
    <div>
      <div className="content">
        <img src={game} alt="Imagem Mata Mosquito" />

        <div className={styles.contentChooseLevel}>
          <select
            className={styles.chooseLevel}
            value={level}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option
                value={option}
                key={option}
                hidden={option === "Selecione o nível"}
              >
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="contentBtn">
          <Button
            disabled={level === "Selecione o nível"}
            onClick={() => navigate("jogo")}
          >
            Iniciar Jogo
          </Button>
        </div>
      </div>
    </div>
  );
};
