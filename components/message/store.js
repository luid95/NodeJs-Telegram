const st = {};

const list = [];

st.addMessage = (message) => {
    list.push(message);
} 

st.getMessage = () =>{
    return list;
}

module.exports = st;