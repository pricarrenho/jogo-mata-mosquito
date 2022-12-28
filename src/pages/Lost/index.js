import gameOver from "../../assets/gameOver.png";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Lost = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="content">
        <img src={gameOver} alt="Imagem você perdeu" />

        <div className="contentBtn">
          <Button onClick={() => navigate("/")}>Reiniciar</Button>
        </div>
      </div>
    </div>
  );
};
