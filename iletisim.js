// script.js
new Vue({
    el: '#app',
    data: {
        form: {
            name: '',
            email: '',
            phone: '',
            gender: '',
            subject: '',
            category: [],
            message: ''
        },
        submitted: false
    },
    methods: {
        validateForm(action) {
            this.submitted = false;
            if (this.form.name && this.form.email && this.form.phone && this.form.gender && this.form.subject && this.form.category.length > 0 && this.form.message) {
                if (this.validateEmail(this.form.email) && this.validatePhone(this.form.phone)) {
                    if (action === 'submit') {
                        this.submitted = true;
                    }
                } else {
                    if (!this.validateEmail(this.form.email)) {
                        alert('Lütfen geçerli bir e-posta adresi giriniz.');
                    }
                    if (!this.validatePhone(this.form.phone)) {
                        alert('Lütfen geçerli bir telefon numarası giriniz.');
                    }
                }
            } else {
                alert('Lütfen tüm alanları doldurunuz.');
            }
        },
        validateEmail(email) {
            var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        validatePhone(phone) {
            var re = /^[0-9]{10}$/;
            return re.test(phone);
        },
        resetForm() {
            this.form.name = '';
            this.form.email = '';
            this.form.phone = '';
            this.form.gender = '';
            this.form.subject = '';
            this.form.category = [];
            this.form.message = '';
            this.submitted = false;
        }
    }
});
