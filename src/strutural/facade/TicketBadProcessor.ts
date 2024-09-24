class TickSistemBad {
    public comprarIngresso(eventoId: string, clienteId: string, valor: number, metodoPagamento: string): void {
        console.log(`Iniciando a compra do ingresso para o evento ${eventoId}.`);

        if (!this.verificarDisponibilidade(eventoId)) {
            console.log("Vagas esgotadas.");
            return;
        }

        if (metodoPagamento === 'cartaoCredito') {
            console.log(`Processando pagamento de ${valor} com cartão de crédito.`);
        } else if (metodoPagamento === 'paypal') {
            console.log(`Processando pagamento de ${valor} via PayPal.`);
        } else if (metodoPagamento === 'boleto') {
            console.log(`Processando pagamento de ${valor} via Boleto Bancário.`);
        } else {
            console.log("Método de pagamento inválido.");
            return;
        }

        console.log(`Enviando e-mail para o cliente ${clienteId}: Compra confirmada para o evento ${eventoId}.`);

        console.log(`Gerando fatura para o evento ${eventoId}, no valor de ${valor}.`);

        console.log(`Atualizando relatório de compras para o evento ${eventoId}.`);
    }

    private verificarDisponibilidade(eventoId: string): boolean {
        console.log(`Verificando disponibilidade de assentos para o evento ${eventoId}.`);
        // Lógica fictícia
        return true;
    }
}
