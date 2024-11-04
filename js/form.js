function enviarForms() {
  // Captura os valores dos campos diretamente no momento do envio
  const Nome = document.getElementById("nome").value;
  const Email = document.getElementById("email").value;
  const Comentario = document.getElementById("comentario").value;

  console.log("Nome:", Nome);
  console.log("Email:", Email);
  console.log("Comentario:", Comentario);

  // Validação para verificar se todos os campos estão preenchidos
  if (!Nome || !Email || !Comentario) {
    alert("É necessário preencher todos os campos obrigatórios.");
    return;
  }

  // Envio dos dados usando fetch
  fetch("https://sheetdb.io/api/v1/mwydhv8bopmrv", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer sk9xdcgfzp9qbll2krigzlnzc9l2znvbzivsam1h",
    },
    body: JSON.stringify({
      data: [
        {
          Nome: Nome,
          Email: Email,
          Comentario: Comentario,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Informações enviadas, obrigado!");
      document.getElementById("formulario").reset(); // Limpa o formulário após o envio
    })
    .catch((error) => console.error("Erro ao enviar dados:", error));
}
