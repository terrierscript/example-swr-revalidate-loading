// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function PromiseTimeout(delayms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, delayms);
    });
}
export default async (req, res) => {
  res.statusCode = 200
  await PromiseTimeout(2000)
  res.json({ name: 'John Doe', value: Math.random() })
}
