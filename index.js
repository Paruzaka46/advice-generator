$(".random").click(async (event) => {
  event.preventDefault();
  try {
    const result = await axios.get("https://api.adviceslip.com/advice");
    const randomAdvice = result.data.slip;
    console.log(randomAdvice);
    $(".id span").text(randomAdvice.id);
    $(".advice").text(randomAdvice.advice);
  } catch (error) {
    console.log("error");
  }
});
