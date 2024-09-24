# Design Patterns: Contextos e Motivações no Desenvolvimento

Este repositório contém os exemplos de código utilizados durante a palestra **"Design Patterns: Contextos e Motivações no Desenvolvimento"**, apresentada no evento **Agile in the Jungle**. A palestra aborda como os padrões de projeto (Design Patterns) podem ser utilizados para resolver problemas comuns no desenvolvimento de software, com foco em seus contextos de aplicação e as motivações por trás de cada padrão.

## Exemplos Incluídos

Os exemplos fornecidos no repositório estão organizados por categorias de padrões de projeto para facilitar o entendimento. Cada exemplo busca demonstrar um problema prático que pode ser resolvido com o uso de um design pattern específico, juntamente com a intenção por trás do uso do padrão.

### Padrões de Projeto Demonstrados

#### Behavioral Patterns
1. **Observer Pattern**: 
   - **Problema**: Quando há uma mudança em um objeto, vários outros objetos dependentes devem ser notificados e atualizados automaticamente.
   - **Intenção**: O **Observer Pattern** permite que um objeto "sujeito" notifique seus "observadores" sem precisar conhecer os detalhes dos observadores, promovendo baixo acoplamento.
   - [Ver código](./src/behavioral/observer)

2. **Strategy Pattern**: 
   - **Problema**: Diferentes algoritmos ou métodos precisam ser aplicados para resolver o mesmo problema, mas devem ser intercambiáveis de maneira flexível.
   - **Intenção**: O **Strategy Pattern** permite que você defina uma família de algoritmos, encapsule cada um e os torne intercambiáveis, promovendo a flexibilidade na escolha de algoritmos em tempo de execução.
   - [Ver código](./src/behavioral/strategy)

#### Creational Patterns
1. **Factory Method**:
   - **Problema**: Quando você precisa instanciar objetos de diferentes tipos, mas não quer expor a lógica de criação de objetos ao cliente diretamente.
   - **Intenção**: O **Factory Method** abstrai o processo de criação, permitindo que subclasses decidam quais classes concretas instanciar.
   - [Ver código](./src/creational/factory)

#### Structural Patterns
1. **Facade Pattern**: 
   - **Problema**: Sistemas complexos com muitas interações entre diferentes subsistemas podem ser difíceis de usar e manter.
   - **Intenção**: O **Facade Pattern** fornece uma interface simples para interagir com um conjunto complexo de subsistemas, escondendo sua complexidade interna.
   - [Ver código](./src/structural/facade)

2. **Adapter Pattern**:
   - **Problema**: Sistemas existentes precisam interagir com novos sistemas ou componentes, mas suas interfaces são incompatíveis.
   - **Intenção**: O **Adapter Pattern** permite que interfaces incompatíveis trabalhem juntas ao criar uma camada de adaptação entre elas.
   - [Ver código](./src/structural/adapter)

### Estrutura de Pastas

A estrutura dos exemplos está organizada em subpastas de acordo com o tipo de padrão de projeto, conforme listado abaixo:

```
└───src
    ├───behavioral
    │   ├───observer
    │   └───strategy
    │       └───strategies
    ├───creational
    │   └───factory
    └───structural
        ├───adapter
        │   ├───adapters
        │   └───sdks
        └───facade
            ├───services
            └───strategies
``` 