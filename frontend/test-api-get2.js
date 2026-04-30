import axios from 'axios';
(async () => {
    try {
        const loginRes = await axios.post('http://127.0.0.1:5000/api/v1/admin/login', {
            email: 'admin@upcraft.com',
            password: 'admin123'
        });
        const token = loginRes.data.token;
        const config = { headers: { Authorization: `Bearer ${token}` } };
        
        const courseId = '69f34cb090130c78d2ec1de0';
        const res = await axios.get(`http://127.0.0.1:5000/api/v1/quiz/${courseId}`, config);
        
        console.log("Quiz fetched:", JSON.stringify(res.data, null, 2));
    } catch (e) {
        console.error("Error:", e.response ? JSON.stringify(e.response.data) : e.message);
    }
})();
