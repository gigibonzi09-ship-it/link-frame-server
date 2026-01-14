export default async function handler(req, res) {
  const body = req.body || {};
  const buttonIndex = body.untrustedData?.buttonIndex;

  let message = "";
  let image = "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png";

  // Gestione dei pulsanti
  if (buttonIndex === 1) {
    message = "The community is feeling BULLISH on LINK! 🚀";
  } else if (buttonIndex === 2) {
    message = "Some users are BEARISH on LINK 📉";
  } else if (buttonIndex === 3) {
    const price = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=usd"
    )
      .then(r => r.json())
      .then(d => d.chainlink.usd);

    message = Current LINK price: $${price};
  } else {
    message = "Tap a button to interact with the Frame.";
  }

  // Risposta del Frame
  res.status(200).json({
    image,
    postUrl: "https://link-frame-server-1xvh.vercel.app/api/link-frame",
    buttons: [
      { label: "Bullish 🚀" },
      { label: "Bearish 📉" },
      { label: "Current Price" }
    ],
    text: message
  });
}








