# Respostas

1 - Lista de números primos do primeiro até o milésimo, separados em 5 páginas cada uma com 200 destes.

2 - Este código não é limpo, começando pelos nomes das variáveis, onde a maioria são abreviadas o que dificulta a compreensão ao ler o código sem contexto do que o código faz, outro erro cometido está na nomenclatura da classe e do método main, onde o nome da classe não diz sobre o que é a classe e método main não diz o que faz, apesar que caso o nome da classe fosse melhor, poderia considerar o usar o nome main. Partindo para erros na estrutura, o método main está realizando dois loops, um para popular P (lista de primes) e outro para realizar paginação e print das páginas, cada um destes poderiam ser separados em métodos diferentes com nomes autoexplicativos. Ainda sobre a parte de separação em métodos, pode criado uma nova função para realizar a validação se o número é primo.

3 - Código: refactored_main.js

4 - Middlewares no Express possuem como função a adição de funcionalidade a rotas. No Express, é possível utilizar middlewares atrelado a rotas específicas, métodos ou no geral de um router(considerando que o server também é um router), portanto, pode-se reduzir a duplicação de código ao utilizar middlewares para realizar funções como Log ou Autenticação os aplicando a métodos e/ou em routers.

5 - As duas opções possuem vantagens e desvantagens. Soluções utilizando ORM(Object Relational Mapper) trazem muitas vantagens em questão de desenvolvimento, visto que facilita a construção de código pois não há necessidade da construção manual de queries SQL, deste modo permitindo a construção do código em "uma linguagem" apenas, assim padronizando o código, o que facilita a interpretação deste por outras pessoas e permitindo uma introdução de novas pessoas na construção do código sem a necessidade de explicar em detalhes a estrutura do banco de dados, outro fator menos mencionado é que alguns ORM possuem por padrão estratégias de mitigação de risco contra ataques de SQL Injection. Entretanto, por o ORM ser um mapper, nem sempre será utilizado as queries mais otimizadas para cada operação por padrão e pode ser que algumas operações virem fonte de problemas de performance, sendo necessario criar manualmente a query com uma conexão direta com o banco de dados.\
Neste mundo onde realiza-se queries escritas a mão é o mundo onde query builders brilham. Por não ser uma camada no meio, mas basicamente um connection handler e um transformador de string/objetos para uma query em SQL, permite o programador construir qualquer query, deste modo torna-se responsabilidade do programador escrever a melhor query possível para realizar a operação desejada. Ao mudar o onus para o progamador escrever a melhor query possível, surgem as desvantagens desse tipo de ferramenta, nem sempre o programador vai saber qual é a melhor query e quanto mais complexo a query, mais testes são necessários para 'garantir' que a query está realizando a operação correta, além disso, ao contrário da solução com ORM, no código haverá duas linguagens sendo utilizadas, a que está o código e SQL, o que, por motivos citados anteriomente, dificultam a interpretação do código o que dificulta também outros fatores como manutenção, adicionar pessoas para trabalhar no código, etc.

6 - 
```sql
SELECT jogador1.name as name, jogador2.name as name
FROM (
        SELECT LEAST(jogador1_id, jogador2_id) as jogador1_id, GREATEST(jogador1_id, jogador2_id) AS jogador2_id
        FROM partidas
        WHERE pontos_jogador1 + pontos_jogador2 > 30 AND duracao > 90
        GROUP BY LEAST(jogador1_id, jogador2_id), GREATEST(jogador1_id, jogador2_id)
        HAVING Count(*) > 2
     ) as partidas
INNER JOIN jogador jogador1 ON jogador1.id = partidas.jogador1_id
INNER JOIN jogador jogador2 ON jogador2.id = partidas.jogador2_id;
```

7 - Código, Algumas observações a respeito da implementação:

Mudanças que gostaria de ter aplicado, mas pela proximidade da deadline não foram realizadas nessa iteração:
- Utilização de algum framework mais versátil - sugestão NextJs;
- Utilização de alguma engine de css ao invés de plain css - sugestão styled;
- Utilização de uma component library na intenção de compartimentar melhor os componentes - sugestão Mantine;
- Melhorar o sistema de filtro;
- Implementar visualmente o sistema de filtros fora da navbar;
