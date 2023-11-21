export interface ILight {
  on(): void
  off(): void
  toString(): string
}

export interface ITheaterLight extends ILight {
  dim(level: number): void
}