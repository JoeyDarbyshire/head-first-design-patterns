export interface IPizza {
  getName(): string
  prepare(): void
  bake(): void
  cut(): void
  box(): void
}