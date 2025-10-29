(async () => {
  const { default: Chatbot } = await import("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js")

  window.addEventListener("DOMContentLoaded", () => {
    Chatbot.init({
      chatflowid: "68b8eb40-9288-4492-be48-5be00a0d9f80",
      apiHost: "https://cloud.flowiseai.com",
      theme: {
        button: {
          backgroundColor: "#4B2E83",
          right: 30,
          bottom: 30,
          size: "large"
        },
        chatWindow: {
          title: "Course Assistant",
          titleColor: "#FFFFFF",
          backgroundColor: "#F8F8FC",
          fontSize: 14,
          poweredByTextColor: "#999999",
          botMessage: { backgroundColor: "#fbfaff", textColor: "#000000" },
          userMessage: { backgroundColor: "#4B2E83", textColor: "#FFFFFF" }
        }
      }
    })
  })
})()