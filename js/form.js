const WHATSAPP_NUMBER = "5511971951905";
const CONTACT_EMAIL = "pedro.cirojunior@hotmail.com";

function getFormData() {
  return {
    nome: document.getElementById("nome").value.trim(),
    empresa: document.getElementById("empresa").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    email: document.getElementById("email").value.trim(),
    cidade: document.getElementById("cidade").value.trim(),
    servico: document.getElementById("servico").value,
    mensagem: document.getElementById("mensagem").value.trim(),
    lgpd: document.getElementById("lgpd").checked,
  };
}

function validate(data) {
  const errors = [];
  if (!data.nome) errors.push("Informe seu nome.");
  const telefoneDigitos = data.telefone.replace(/\D/g, "");
  if (!data.telefone || telefoneDigitos.length < 10 || telefoneDigitos.length > 11) {
    errors.push("Informe um telefone válido com DDD.");
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Informe um e-mail válido.");
  }
  if (!data.servico) errors.push("Selecione o serviço desejado.");
  if (!data.mensagem) errors.push("Descreva o serviço que você precisa.");
  if (!data.lgpd) errors.push("É necessário concordar com a Política de Privacidade (LGPD).");
  return errors;
}

function buildMessage(data) {
  return [
    "Olá! Gostaria de solicitar um orçamento.",
    "",
    "Nome: " + data.nome,
    "Empresa: " + (data.empresa || "-"),
    "Telefone: " + data.telefone,
    "E-mail: " + data.email,
    "Cidade: " + (data.cidade || "-"),
    "Serviço desejado: " + data.servico,
    "",
    "Mensagem:",
    data.mensagem,
  ].join("\n");
}

function showFeedback(message, type) {
  const box = document.getElementById("form-feedback");
  box.textContent = message;
  box.className = "form-feedback " + type;
}

function enviarForms(event) {
  event.preventDefault();
  const data = getFormData();
  const errors = validate(data);

  if (errors.length) {
    showFeedback(errors.join(" "), "error");
    return;
  }

  showFeedback("", "");
  const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(buildMessage(data));
  window.open(url, "_blank", "noopener");
  showFeedback(
    "Sua mensagem foi preparada e abrimos o WhatsApp para envio. Caso prefira, utilize o link de e-mail abaixo.",
    "success"
  );
}

function buildMailto(data) {
  const subject = "Solicitação de orçamento - " + (data.servico || "Reforma/Construção");
  return "mailto:" + CONTACT_EMAIL +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(buildMessage(data));
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");
  if (form) form.addEventListener("submit", enviarForms);

  const mailtoLink = document.getElementById("mailto-link");
  if (mailtoLink) {
    mailtoLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = buildMailto(getFormData());
    });
  }
});
