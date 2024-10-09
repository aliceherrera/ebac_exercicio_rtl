import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from "..";

describe("Testes para comentarios", () => {
  test("Deve adicionar 2 comentarios", () => {
    render(<PostComments />);

    fireEvent.change(screen.getByTestId("comentario-textarea"), {
      target: {
        value: "Primeiro comentario",
      },
    });

    fireEvent.click(screen.getByTestId("btn-enviar"));

    fireEvent.change(screen.getByTestId("comentario-textarea"), {
      target: {
        value: "Segundo comentario",
      },
    });

    fireEvent.click(screen.getByTestId("btn-enviar"));

    expect(screen.getAllByTestId("comentario-li")).toHaveLength(2);
  });
});
