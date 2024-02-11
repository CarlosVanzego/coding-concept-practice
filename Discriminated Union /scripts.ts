interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

// Function using a discriminated union
function area(shape: Shape): number {
  switch (shape.kind) {
      case "square":
          return shape.size * shape.size;
      case "rectangle":
          return shape.width * shape.height;
      case "circle":
          return Math.PI * shape.radius ** 2;
      default:
          // This ensures that TypeScript checks if all cases are covered
          throw new Error("Invalid shape");
  }
}

// Using the area function
const square: Square = { kind: "square", size: 5 };
console.log(area(square)); // Output: 25

const circle: Circle = { kind: "circle", radius: 3 };
console.log(area(circle)); // Output: ~28.27