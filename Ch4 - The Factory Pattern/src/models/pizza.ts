export enum cutType {
  diagonal = 'diagonal',
  square = 'square'
}

export interface IPizza {
  setCut(type: cutType): void
  getName(): string
  setName(name: string): void
  prepare(): void
  bake(): void
  cut(): void
  box(): void
}