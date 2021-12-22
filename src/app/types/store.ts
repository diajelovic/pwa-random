export const enum TokenType {
  WHITE, ORANGE, GREEN, BLUE, RED, YELLOW, PURPLE, BLACK
}

export interface Token {
  type: TokenType,
  value: number
}

export interface ShopItem {
  token: Token,
  price: number
}
