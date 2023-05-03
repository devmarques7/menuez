import React, { useContext, useEffect, useState } from "react";
import Container from "../../utils/Container";
import { Button, Loader, LoaderContainer, MenssageContainer } from "./style";
import { AppContext } from "../../../contexts/AppContext";

export const WaitPage = () => {
  const [countMinute, setcountMinute] = useState(0);
  const [countSecond, setcountSecond] = useState(0);

  const { queue, setShowModal, event_id, navigate } = useContext(AppContext);

  const countDown = (minutes: number, onFinished: { (): void; (): void }) => {
    let seconds = minutes * 60;
    const intervalId = setInterval(() => {
      seconds--;
      const minutesLeft = Math.floor(seconds / 60);
      const secondsLeft = seconds % 60;
      setcountMinute(minutesLeft);

      setcountSecond(secondsLeft);

      if (countSecond === 1) {
        setShowModal(true);
      }

      if (seconds <= 0) {
        clearInterval(intervalId);
        onFinished();
      }
    }, 1000);
  };

  const onFinished = () => {
    console.log("onFinished");
    navigate(`/tickets/${event_id}`);
  };

  useEffect(() => {
    // Simula uma requisição para obter o tempo de espera estimado
    setTimeout(() => {
      const timer = queue * 1;
      setcountMinute(timer);
      countDown(timer, onFinished);
    }, 2000);
  }, []);

  return (
    <Container backgroundSrc="#fff">
      <MenssageContainer>
        <p className="menssage inline">
          Você está na fila de espera com {queue} pessoas na frente.
        </p>
        <p className="menssage onTime">
          O tempo de espera estimado é de aproximadamente {countMinute} minutos
          e {countSecond}.
        </p>
      </MenssageContainer>
      {countMinute > 0 ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <Button>Cancelar e sair da fila</Button>
      )}
    </Container>
  );
};

export default WaitPage;
