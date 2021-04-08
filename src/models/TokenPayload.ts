export enum TokenType {
  CLIENT = 'clientToken',
  HOST = 'hostToken',
  RESPONSE = 'responseToken',
  ECHO = 'echoToken',
}

export interface TokenPayload {
  type: TokenType;
}

export interface HostTokenPayload extends TokenPayload {
  hostId: string;
  gaClientId: string;
}

export interface ClientTokenPayload extends TokenPayload {
  hostId: string;
  clientId: string;
  gaClientId: string;
}

export interface ResponseTokenPayload extends TokenPayload {
  hostId: string;
  clientId: string;
}
