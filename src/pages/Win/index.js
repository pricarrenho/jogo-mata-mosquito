import win from "../../assets/win.png";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Win = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="content">
        <img src={win} alt="Imagem você venceu" />

        <div className="contentBtn">
          <Button onClick={() => navigate("/")}>Reiniciar</Button>
        </div>
      </div>
    </div>
  );
};
