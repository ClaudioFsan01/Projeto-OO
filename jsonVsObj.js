// fonte : https://www.json.org/json-pt.html
/*JSON (JavaScript Object Notation - Notação de Objetos JavaScript) é uma formatação leve de troca de dados.
 Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. Está baseado 
 em um subconjunto da linguagem de programação JavaScript, Standard ECMA-262 3a Edição -Dezembro - 1999. JSON
 é em formato texto e completamente independente de linguagem, pois usa convenções que são familiares às linguagens
  C e familiares, incluindo C++, C#, Java, JavaScript, Perl, Python e muitas outras. Estas propriedades fazem com que 
  JSON seja um formato ideal de troca de dados.

  JSON está constituído em duas estruturas:
  Uma coleção de pares nome/valor. Em várias linguagens, isto é caracterizado como um object, record, struct, dicionário, 
  hash table, keyed list, ou arrays associativas.
  Uma lista ordenada de valores. Na maioria das linguagens, isto é caracterizado como uma array, vetor, lista ou sequência.
  Estas são estruturas de dados universais. Virtualmente todas as linguagens de programação modernas as suportam, de uma
  forma ou de outra. É aceitavel que um formato de troca de dados que seja independente de linguagem de programação se baseie
  nestas estruturas.
*/

const obj = {a: 1, b:2, c:3,  soma(){return a+b+c}}

// Convertendo esse objeto para o formato json (formato textual)

console.log(JSON.stringify(obj)) /*JSON.stringify() converte o valor javasrcipt em JSON (Notação de Objetos JavaScript) 
,ou seja, em texto(String) e a função soma() é excluida pois JSON é um formato textual. */

//Convertendo do formato JSON para objeto 

/*OBS : O nome do atributo no formato JSON deve ser delimitado por aspas duplas " " . */

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

//outro formato suportado pelo JSON

console.log(JSON.parse('{"a":1, "b": "String", "c": {}, "d": [], "e": true}'))
// valor String deve ser colocado entre aspas duplas


