import { Parser } from "expr-eval";
import Swal from "sweetalert2";

interface CalculatorLayout {
  calcInput: HTMLInputElement;
  buttons: HTMLButtonElement[];
}

class Calculator {
  private expression: string = "";
  private parser: Parser = new Parser();

  constructor() {
    this.calculatorElements().buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value: string = button.value;
        if (value === "=") {
          this.evaluateExpression();
        } else if (value === "C") {
          this.clearExpression();
        } else if (value === "x") {
          this.backspace();
        } else {
          this.addtoExpression(value);
        }
      });
    });
  }

  addtoExpression(value: string): void {
    this.expression += value;
    this.calculatorElements().calcInput.value += value;
  }

  clearExpression(): void {
    this.expression = "";
    this.calculatorElements().calcInput.value = "";
  }

  backspace(): void {
    this.expression = this.expression.slice(0, -1);
    this.calculatorElements().calcInput.value =
      this.calculatorElements().calcInput.value.slice(0, -1);
  }

  errorMessage(): void {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Expressão inválida",
    });
  }

  private evaluateExpression(): void {
    try {
      const result: number = this.parser.parse(this.expression).evaluate({});

      if (typeof result === "number") {
        if (!isNaN(result) || !isFinite(result)) {
          this.calculatorElements().calcInput.value = "";
          this.errorMessage();
        } else {
          this.calculatorElements().calcInput.value = String(result);
        }
      } else {
        this.errorMessage();
      }
    } catch (error) {
      this.errorMessage();
    }
  }

  private calculatorElements(): CalculatorLayout {
    const calcInput = document.querySelector("input") as HTMLInputElement;
    const buttons = document.querySelectorAll(
      "button"
    ) as unknown as HTMLButtonElement[];

    return { calcInput, buttons };
  }
}

const calculator = new Calculator();
