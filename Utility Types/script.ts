// Awaited<Type>

type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean

// --------------------

// Partial<Type>
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});


// Required<Type>
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }

// const obj2: Required<Props> = { a: 5 }

// --------------------

// Readonly<Type>

// interface Todo {
//   title: string;
// }

// const todo: Readonly<Todo> = {
//   title: "Delete inactive users",
// };

// todo.title = "Hello";


// --------------------

// Record<Keys, Type>
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Marine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
// const cats: Record<CatName, CatInfo>

// --------------------

// Pick<Type, Keys>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };

// todo;
// // const todo: TodoPreview

// --------------------

// Omit<Type, Keys>
// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }
 
// type TodoPreview = Omit<Todo, "description">;
 
// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   createdAt: 1615544252770,
// };
 
// todo;
 
// // const todo: TodoPreview
 
// type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
// const todoInfo: TodoInfo = {
//   title: "Pick up kids",
//   description: "Kindergarten closes at 5pm",
// };
 
// todoInfo;
   
// // const todoInfo: TodoInfo

// --------------------

// Exclude<UnionType, ExcludedMembers>
type T0 = Exclude<"a" | "b" | "c", "a">;
     
// type T0 = "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
     
// type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
     
// type T2 = string | number
 
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };
 
type T3 = Exclude<Shape, { kind: "circle" }>
     
      // type T3 = {
      //       kind: "square";
      //       x: number;
      //   } | {
      //       kind: "triangle";
      //       x: number;
      //       y: number;
      //   }


      // Extract<Type, Union>
      // type T0 = Extract<"a" | "b" | "c", "a" | "f">;
     
      // // type T0 = "a"
      // type T1 = Extract<string | number | (() => void), Function>;
           
      // // type T1 = () => void
       
      // type Shape =
      //   | { kind: "circle"; radius: number }
      //   | { kind: "square"; x: number }
      //   | { kind: "triangle"; x: number; y: number };
       
      // type T2 = Extract<Shape, { kind: "circle" }>
           
      // // type T2 = {
      // //     kind: "circle";
      // //     radius: number;
      // // }
      
// --------------------

// NonNullable<Type>

// type T0 = NonNullable<string | number | undefined>;
     
// // type T0 = string | number

// type T1 = NonNullable<string[] | null | undefined>;
     
// // type T1 = string[]

// --------------------

// Parameters<Type>

// declare function f1(arg: { a: number; b: string }): void;
 
// type T0 = Parameters<() => string>;
     
// type T0 = []
// type T1 = Parameters<(s: string) => void>;
     
// type T1 = [s: string]
// type T2 = Parameters<<T>(arg: T) => T>;
     
// type T2 = [arg: unknown]
// type T3 = Parameters<typeof f1>;
     
// type T3 = [arg: {
//     a: number;
//     b: string;
// }]
// type T4 = Parameters<any>;
     
// type T4 = unknown[]
// type T5 = Parameters<never>;
     
// type T5 = never
// type T6 = Parameters<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
     
// type T6 = never
// type T7 = Parameters<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
     
// type T7 = never

// --------------------

// ConstructorParameters<Type>

// type T0 = ConstructorParameters<ErrorConstructor>;
     
// type T0 = [message?: string]
// type T1 = ConstructorParameters<FunctionConstructor>;
     
// type T1 = string[]
// type T2 = ConstructorParameters<RegExpConstructor>;
     
// type T2 = [pattern: string | RegExp, flags?: string]
// class C {
//   constructor(a: number, b: string) {}
// }
// type T3 = ConstructorParameters<typeof C>;
     
// type T3 = [a: number, b: string]
// type T4 = ConstructorParameters<any>;
     
// type T4 = unknown[]
 
// type T5 = ConstructorParameters<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
//   Type 'Function' provides no match for the signature 'new (...args: any): any'.
     
// type T5 = never

// --------------------

// ReturnType<Type>

// declare function f1(): { a: number; b: string };
 
// type T0 = ReturnType<() => string>;
     
// type T0 = string
// type T1 = ReturnType<(s: string) => void>;
     
// type T1 = void
// type T2 = ReturnType<<T>() => T>;
     
// type T2 = unknown
// type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
     
// type T3 = number[]
// type T4 = ReturnType<typeof f1>;
     
// type T4 = {
//     a: number;
//     b: string;
// }
// type T5 = ReturnType<any>;
     
// type T5 = any
// type T6 = ReturnType<never>;
     
// type T6 = never
// type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
     
// type T7 = any
// type T8 = ReturnType<Function>;
// Type 'Function' does not satisfy the constraint '(...args: any) => any'.
//   Type 'Function' provides no match for the signature '(...args: any): any'.
     
// type T8 = any

// --------------------

// InstanceType<Type>
// class C {
//   x = 0;
//   y = 0;
// }
 
// type T0 = InstanceType<typeof C>;
     
// type T0 = C
// type T1 = InstanceType<any>;
     
// type T1 = any
// type T2 = InstanceType<never>;
     
// type T2 = never
// type T3 = InstanceType<string>;
// Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
     
// type T3 = any
// type T4 = InstanceType<Function>;
// Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
//   Type 'Function' provides no match for the signature 'new (...args: any): any'.
     
// type T4 = any

// --------------------


// ThisParameterType<Type>
function toHex(this: Number) {
  return this.toString(16);
}
 
function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// --------------------


// OmitThisParameter<Type>

// function toHex(this: Number) {
//   return this.toString(16);
// }
 
// const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);
 
// console.log(fiveToHex());

// --------------------

// ThisType<Type>

// type ObjectDescriptor<D, M> = {
//   data?: D;
//   methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
// };
 
// function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
//   let data: object = desc.data || {};
//   let methods: object = desc.methods || {};
//   return { ...data, ...methods } as D & M;
// }
 
// let obj = makeObject({
//   data: { x: 0, y: 0 },
//   methods: {
//     moveBy(dx: number, dy: number) {
//       this.x += dx; // Strongly typed this
//       this.y += dy; // Strongly typed this
//     },
//   },
// });
 
// obj.x = 10;
// obj.y = 20;
// obj.moveBy(5, 5);

