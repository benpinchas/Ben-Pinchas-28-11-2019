const prod = {
   site_url: 'https://benpinchas.github.io/Ben-Pinchas-28-11-2019'
};
const dev = {
   site_url: 'http://localhost:3000'
};
export default process.env.NODE_ENV === 'development' ? dev : prod;