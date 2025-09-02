const Utilitarios = require("../src/utilitarios")

describe("Test Utilitarios", () => {
  let utilitarios

  beforeEach(() => {
    utilitarios = new Utilitarios()
  })

  describe("String operations", () => {
    test("deve inverter uma string", () => {
      expect(utilitarios.inverterString("hello")).toBe("olleh")
      expect(utilitarios.inverterString("")).toBe("")
    })

    test("deve contar caracteres de uma string", () => {
      expect(utilitarios.contarCaracteres("hello")).toBe(5)
      expect(utilitarios.contarCaracteres("")).toBe(0)
    })

    test("deve converter string para maiúsculas", () => {
      expect(utilitarios.paraMaiusculas("hello")).toBe("HELLO")
      expect(utilitarios.paraMaiusculas("")).toBe("")
    })

    test("deve converter string para minúsculas", () => {
      expect(utilitarios.paraMinusculas("HELLO")).toBe("hello")
      expect(utilitarios.paraMinusculas("")).toBe("")
    })

    test("deve colocar primeira letra em maiúscula", () => {
      expect(utilitarios.primeiraLetraMaiuscula("hello")).toBe("Hello")
      expect(utilitarios.primeiraLetraMaiuscula("h")).toBe("H")
    })

    test("deve remover espaços em branco", () => {
      expect(utilitarios.removerEspacos("  hello  ")).toBe("hello")
      expect(utilitarios.removerEspacos("hello")).toBe("hello")
    })

    test("deve repetir texto", () => {
      expect(utilitarios.repetirTexto("hi", 3)).toBe("hihihi")
      expect(utilitarios.repetirTexto("a", 0)).toBe("")
    })

    test("deve contar palavras", () => {
      expect(utilitarios.contarPalavras("hello world")).toBe(2)
      expect(utilitarios.contarPalavras("  hello   world  ")).toBe(2)
      expect(utilitarios.contarPalavras("")).toBe(1)
    })

    test("deve verificar se é palíndromo", () => {
      expect(utilitarios.ehPalindromo("arara")).toBe(true)
      expect(utilitarios.ehPalindromo("A man a plan a canal Panama")).toBe(true)
      expect(utilitarios.ehPalindromo("hello")).toBe(false)
    })
  })

  describe("Mathematical operations", () => {
    test("deve somar dois números", () => {
      expect(utilitarios.somar(2, 3)).toBe(5)
      expect(utilitarios.somar(-1, 1)).toBe(0)
    })

    test("deve subtrair dois números", () => {
      expect(utilitarios.subtrair(5, 3)).toBe(2)
      expect(utilitarios.subtrair(1, 5)).toBe(-4)
    })

    test("deve multiplicar dois números", () => {
      expect(utilitarios.multiplicar(3, 4)).toBe(12)
      expect(utilitarios.multiplicar(-2, 3)).toBe(-6)
    })

    test("deve dividir dois números", () => {
      expect(utilitarios.dividir(10, 2)).toBe(5)
      expect(utilitarios.dividir(-6, 3)).toBe(-2)
    })

    test("deve lançar erro ao dividir por zero", () => {
      expect(() => utilitarios.dividir(10, 0)).toThrow("Divisão por zero")
    })

    test("deve verificar se número é par", () => {
      expect(utilitarios.ehPar(4)).toBe(true)
      expect(utilitarios.ehPar(3)).toBe(false)
      expect(utilitarios.ehPar(0)).toBe(true)
    })

    test("deve verificar se valor é número", () => {
      expect(utilitarios.ehNumero(42)).toBe(true)
      expect(utilitarios.ehNumero("42")).toBe(false)
      expect(utilitarios.ehNumero(NaN)).toBe(false)
    })

    test("deve gerar número aleatório", () => {
      const num = utilitarios.gerarNumeroAleatorio(10)
      expect(num).toBeGreaterThanOrEqual(0)
      expect(num).toBeLessThan(10)
      expect(Number.isInteger(num)).toBe(true)
    })
  })

  describe("Array operations", () => {
    test("deve retornar primeiro elemento do array", () => {
      expect(utilitarios.primeiroElemento([1, 2, 3])).toBe(1)
      expect(utilitarios.primeiroElemento(["a"])).toBe("a")
    })

    test("deve retornar último elemento do array", () => {
      expect(utilitarios.ultimoElemento([1, 2, 3])).toBe(3)
      expect(utilitarios.ultimoElemento(["a"])).toBe("a")
    })

    test("deve retornar tamanho do array", () => {
      expect(utilitarios.tamanhoArray([1, 2, 3])).toBe(3)
      expect(utilitarios.tamanhoArray([])).toBe(0)
    })

    test("deve ordenar array", () => {
      expect(utilitarios.ordenarArray([3, 1, 2])).toEqual([1, 2, 3])
      expect(utilitarios.ordenarArray(["c", "a", "b"])).toEqual(["a", "b", "c"])
    })

    test("deve inverter array", () => {
      expect(utilitarios.inverterArray([1, 2, 3])).toEqual([3, 2, 1])
      expect(utilitarios.inverterArray([])).toEqual([])
    })

    test("deve juntar array com separador", () => {
      expect(utilitarios.juntarArray([1, 2, 3])).toBe("1,2,3")
      expect(utilitarios.juntarArray([1, 2, 3], "-")).toBe("1-2-3")
    })

    test("deve calcular média do array", () => {
      expect(utilitarios.mediaArray([1, 2, 3])).toBe(2)
      expect(utilitarios.mediaArray([10, 20])).toBe(15)
      expect(utilitarios.mediaArray([])).toBe(0)
    })

    test("deve remover duplicados do array", () => {
      expect(utilitarios.removerDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3])
      expect(utilitarios.removerDuplicados(["a", "b", "a"])).toEqual(["a", "b"])
    })
  })

  describe("Object operations", () => {
    test("deve mesclar dois objetos", () => {
      const obj1 = { a: 1, b: 2 }
      const obj2 = { b: 3, c: 4 }
      expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({
        a: 1,
        b: 3,
        c: 4,
      })
    })

    test("deve mesclar objetos vazios", () => {
      expect(utilitarios.mesclarObjetos({}, {})).toEqual({})
      expect(utilitarios.mesclarObjetos({ a: 1 }, {})).toEqual({ a: 1 })
    })
  })
})
