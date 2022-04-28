const valorCompra = 1000;
const parcelas = 8;

if (parcelas <= 1) {
  let valorDesconto = valorCompra * 0.1;
  let valorFinal = valorCompra - valorDesconto;
  console.log(
    `Pagamento a vista valor final com desconto é de R$ ${valorFinal.toFixed(
      2
    )} reais.`
  );
} else if (parcelas > 7 && parcelas <= 12) {
  let valorFinal = valorCompra / parcelas + 0.01 * 100;

  console.log(
    `Pagamento foi efetuado em ${parcelas} parcelas, será acrecido juros de 1% e o valor de cada parcela é de R$ ${valorFinal.toFixed(
      2
    )}`
  );
} else {
  let valorFinal = valorCompra / parcelas;

  console.log(
    `Pagamento foi efetuado em ${parcelas} parcelas, não teve direito ao desconto e o valor de cada parcela é de R$ ${valorFinal.toFixed(
      2
    )}`
  );
}
