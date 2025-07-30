import { TransformationType } from "class-transformer";

export function objectTransformer({
  value,
  type,
}: {
  value: object;
  type: TransformationType;
}) {
  switch (type) {
    case TransformationType.PLAIN_TO_CLASS: {
      return value as object;
    }
    case TransformationType.CLASS_TO_PLAIN: {
      return value as object;
    }
    default:
      throw new Error("It is not supported");
  }
}

export const objectMapTransformer =
  <T>() =>
  ({
    value,
    type,
  }: {
    value: { [key: string]: T } | Map<string, T>;
    type: TransformationType;
  }) => {
    switch (type) {
      case TransformationType.PLAIN_TO_CLASS: {
        if (value === undefined) {
          return undefined;
        }
        if (value === null) {
          return null;
        }
        const source = value as { [key: string]: T };
        const map = new Map<string, T>();
        for (const key of Object.keys(source)) {
          map.set(key, source[key]);
        }
        return map;
      }
      case TransformationType.CLASS_TO_PLAIN: {
        if (value === undefined) {
          return undefined;
        }
        if (value === null) {
          return null;
        }
        const source = value as Map<string, T>;
        const obj: { [key: string]: T } = {};
        for (const [k, v] of source) {
          obj[k] = v;
        }
        return obj;
      }
      default:
        throw new Error("It is not supported");
    }
  };
