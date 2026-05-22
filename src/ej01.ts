// Ejercicio 1 — L-value y R-value: variables como contenedores (20 pts)
// Trazabilidad: OA1 — F-01, F-02, F-03
//
// Un L-value es una posición de memoria que puede RECIBIR una asignación.
// Un R-value es el CONTENIDO leído desde esa posición.
// Todas las funciones de este ejercicio modifican el array original (in-place).

// 1a. Intercambia arr[i] y arr[j] en el array (in-place, 5 pts).
// Las posiciones arr[i] y arr[j] actúan como L-values al recibir la asignación.
// No retorna nada — modifica el array original.
export function swap<T>(arr: T[], i: number, j: number): void {
  const number = arr[i];
  arr[i] = arr[j];
  arr[j] = number;
}

// 1b. Rota el array una posición hacia la izquierda (in-place, 5 pts).
// El primer elemento pasa al final: [1, 2, 3, 4] → [2, 3, 4, 1]
// Si el array tiene 0 o 1 elementos, no hace nada.
export function rotateLeft<T>(arr: T[]): void {
  if (arr.length >= 2){
    const primero = arr[0];
    for (let i: number = 0; i < arr.length - 1; i++){
      arr[i] = arr[i+1];
    };
    arr[arr.length-1] = primero;
  };
}

// 1c. Duplica cada elemento del array numérico (in-place, 5 pts).
// Lee el valor (R-value), lo duplica y lo escribe de vuelta en la misma posición (L-value).
// [1, 2, 3] → [2, 4, 6]
export function doubleAll(arr: number[]): void {
  for (let i: number = 0; i < arr.length; i++){
    arr[i] = arr[i]*2;
  };  
}

// 1d. Reemplaza todas las ocurrencias de oldVal por newVal en el array (in-place, 5 pts).
// Retorna la cantidad de reemplazos realizados.
// findAndReplace([1,2,1,3,1], 1, 9) → modifica a [9,2,9,3,9] y retorna 3
export function findAndReplace<T>(arr: T[], oldVal: T, newVal: T): number {
  let count = 0;
  for (let i: number = 0; i < arr.length; i++){
    if(arr[i] === oldVal){ arr[i] = newVal; count++};
  };
  return count;
}
