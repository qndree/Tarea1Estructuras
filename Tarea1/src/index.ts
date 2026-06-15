/**    
 * Tarea1: TDAs                                                                                                                                                                                                     * Tarea1: TDAs y Nodos Doblemente Enlazados
 */

// Interfaz IContenedor
interface IContenedor<T> {
    agregar(elemento: T): void;
    eliminar(): T | undefined;
    obtener(): T | undefined;
    estaVacia(): boolean;
    tamanio(): number;
}

// Interfaz IComparable
interface IComparable<T> {
    comparar(otro: T): number;
}

// Interfaz IIterable
interface IIterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

// Tipo generico Par (como tupla)
type Par<A, B> = [A, B];

// NodoDoblementeEnlazado
class NodoDoblementeEnlazado<T extends IComparable<T>> implements IComparable<NodoDoblementeEnlazado<T>> {

    public dato: T;
    public siguiente: NodoDoblementeEnlazado<T> | null;
    public anterior: NodoDoblementeEnlazado<T> | null;

    constructor(dato: T) {
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
    }

    toString(): string {
        return `Nodo(${this.dato})`;
    }

    // Implementacion de IComparable
    comparar(otro: NodoDoblementeEnlazado<T>): number {
        let resultado = this.dato.comparar(otro.dato);
        return resultado;
    }
}