// uma matriz de objetos:
const quiz = [
{
    q:'Um processo pode ser iniciado e terminado. O sistema operacional sabe se o processo está em execução ou não, por meio da técnica de troca de estados. Considerando o texto acima e que os processos possuem tipos de estados que podem se encontrar, selecione a alternativa que apresente todos os tipos de estados válidos:',
    options:['Novo, em heap, em processamento, pronto ',
             'Em heap, em processamento, pronto, aguardando,',
             'Em memória, em processamento, pronto, em heap',
            'Novo, em espera, pronto, em execução',
            'Novo, pronto, inicial, em memória',
            ],
    answer: 3

},
{
    q:'Um processo pode ser considerado um programa em execução. Por exemplo: imagine que desejamos ler um livro em nosso computador (os chamados e-books). O livro somente poderá ser lido quando ele estiver em execução e para isto é necessário clicar duas vezes sob ele para a sua abertura. Com isto, um processador de texto será aberto. A partir deste momento temos um processo em execução (no caso o processador de texto com o e-book sendo exibido).'
 
    +'VOLTZ, Wagner Mendes. Sistemas Operacionais. Reimpressão - Maringá - PR. Unicesumar, 2019 (adaptado).'
    
    +'Considerando o texto acima e no que diz respeito aos processos de um sistema operacional é correto afirmar que:0',
    options:['Para a execução de um processo se faz necessário recursos como: tempo de CPU, dispositivos de entrada e saída, alocação de memória e arquivos',
             'Os processos são estruturas físicas que os operadores devem reproduzir com os computadores,',
             ' São estruturas abstratas que são executados apenas em ambientes na nuvem',
            'São estruturas que utilizam o uso do processador e da memória de um computador',
            ' São estruturas físicas em que se pode expandir a capacidade do hardware para a',
            ],
    answer: 0

},
{
    q:'Sobre o Sistema Operacional Android é correto afirmar:',
    options:['É um sistema operacional servidor que é baseado em Linux e foi desenvolvido pelo Google ',
             'É um sistema operacional embarcado que é focado em dispositivos de Internet das Coisas e sua interface gráfica é baseada no Linux',
             'É um sistema operacional para dispositivos móveis que teve seu desenvolvimento a partir do kernel do Linux',
            'É um sistema operacional embarcado que é focado em dispositivos móveis e sua interface gráfica é baseada no Linux',
            'É um sistema operacional para dispositivos móveis que teve seu desenvolvimento a partir do kernel do Windows',
            ],
    answer: 2

},
{
    q:'Você já deve ter percebido que os processos de alguma maneira têm que se comunicar com outros. Cabe ao sistema operacional garantir esta comunicação de forma bem estruturada e sem interrupções.'
    + 'Considerando o texto acima e pensando sobre a solução de Peterson é correto afirmar',
    options:[' É uma solução para facilitar o processo de instalação de múltiplos sistemas operacionais em um computador',
             'É responsável pela melhor utilização da memória em sistemas operacionais de 64 bits',
             'Está diretamente ligado com a virtualização de ambientes e na criação de máquinas virtuais',
            'Consiste em um algoritmo, inicialmente para dois processos, que controla a lista de processos interessados em acessar a região crítica',
            'Nenhuma das anteriores',
            ],
    answer: 3

},
{
    q:'A partir da ideia de memória virtual, observe as afirmativas a seguir:'
    +'I – O controle do uso de memória para a troca de processos armazenados temporariamente realiza trocas de processos na memória (swapping).'
    +'II – Um dos algoritmos para controle do swapping retira conteúdos de páginas de memória principal menos utilizados e os coloca em memória virtual para que um novo conteúdo seja colocado.'
    +'III – Conteúdos de páginas de memória em uso são prioridade para serem alocados em memória virtual nos algoritmos de controle de swapping.',
    options:['I, apenas. ',
             'II, apenas.',
             'III, apenas.',
            'I e II, apenas.',
            'II e III, apenas.',
            ],
    answer: 3

},
{
    q:'Podemos descrever a função do sistema operacional como: gerenciar o uso dos componentes (hardware) de um computador, garantindo disponibilidade do hardware e armazenamento correto de dados; fornecer uma camada de abstração para utilização e desenvolvimento de outros softwares; e fornecer uma interface de acesso para dispositivos com tecnologias distintas como USB e IDE.'
    +'Considerando o texto descrito a cima e sabendo que existem vários tipos de Sistemas Operacionais, selecione a alternativa que apresente tipos reais:',
    options:['SO de servidores, SO de Backend, SO embarcado; ',
             'SO de servidores, SO de Computadores Pessoais, SO embarcado',
             'SO de potência, SO de Computadores Impessoais, SO embarcado',
            'SO de Aplicação, SO de Threads, SO embarcado',
            'SO de servidores, SO de Computadores Pessoais, SO de Threads',
            ],
    answer: 1

},
{
    q:'Todo processo precisa de um espaço em memória durante a sua execução e um pedaço desta memória é compartilhado entre outros processos. Este compartilhamento é chamado de região crítica. A melhor maneira para que não ocorra condição de corrida é realizando a exclusão mútua. '
    +'Com base no texto acima e no que diz respeito a comunicação entre processos e sobre a exclusão mútua, selecione a alternativa que represente um critério que se deve considerar numa proposta de solução:',
    options:[ 'Todo processo deve esperar eternamente para entrar em sua região crítica',
             'Dois processos nunca podem estar simultaneamente em suas regiões críticas',
            'Tudo pode ser afirmado sobre a velocidade ou sobre o número de CPUs',
            'Todo processo executando fora de sua região crítica pode bloquear outros processos.',
            'Nenhuma das anteriores',
            ],
    answer: 1

},
{
    q:'Um processo pode ser considerado um programa em execução. Por exemplo: imagine que desejamos ler um livro em nosso computador (os chamados e-books). O livro somente poderá ser lido quando ele estiver em execução e para isto é necessário clicar duas vezes sob ele para a sua abertura. Com isto, um processador de texto será aberto. A partir deste momento temos um processo em execução (no caso o processador de texto com o e-book sendo exibido).'
    +'Sobre os processos de um Sistema Operacional, selecione a alternativa que apresente as quatro grandes áreas que o compõe?',
    options:['Seção de dados, seção de informações, heap e pilha ',
             'Seção de texto, seção de dados, heap e fila',
             'Seção de texto, seção de dados, máquina virtual e pilha',
            'Seção de memória, seção de dados, fila e pilha',
            'Seção de texto, seção de dados, heap e pilha',
            ],
    answer: 0

},
{
    q:'Os recursos de hardware representam uma série de tecnologia que trabalha em conjunto para que soluções de software possam ser executadas. Um dos recursos de hardware mais conhecidos é a memória de armazenamento. As afirmativas a seguir se referem a características de alguns tipos de memórias.'
    +'I – Memória ROM ou de massa é usada para armazenamento de quantidades maiores de dados de forma permanente.'
    +'II – Memória RAM se refere à memória temporária básica de trabalho onde os softwares abertos são inicialmente alocados.'
    +'III – Memória cache se refere a um tipo de memória de pequena capacidade para dados de uso mais imediato pelo processador.',
    options:['I, apenas. ',
             'II, apenas.',
             'III, apenas.',
            'I e II, apenas.',
            'II e III, apenas.',
            ],
    answer: 4

},
{
    q:'O sistema operacional possuiu um conjunto grande de algoritmos de escalonamento que podem ser utilizados. Eles são divididos em: algoritmos de escalonamento preemptivo: o processo é executado por um tempo máximo fixado; e algoritmos de escalonamento não preemptivo: o processo é executado até que seja bloqueado. Com base no texto acima e que o escalonamento consiste em utilizar algoritmos para decidir qual processo deve ser utilizado. Um dos algoritmos mais simples de escalonamento é o chamado FCFS. Selecione a alternativa que apresenta uma definição correta sobre esse algoritmo:',
    options:['São conhecidos como Pilhas e a ideia é que o último processo a entrar é o primeiro a sair ',
             'O algoritmo FCFS consegue gerenciar os processos de modo que os menores sempre sejam executados primeiro',
             'O algoritmo FCFS (first come, first served) implementa o conceito de Fila, onde o primeiro a entrar é o primeiro a sair',
            'São conhecidos como Hash e a ideia é que o último processo a entrar é o primeiro a sair',
            'O algoritmo FPS consegue gerenciar os processos de modo que os menores sempre sejam executados primeiro',
            ],
    answer: 2

}

/*
{
    q:'',
    options:[' ',
             '',
             '',
            '',
            '',
            ],
    answer: 2

}
*/





]