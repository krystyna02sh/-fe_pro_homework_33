
import React from 'react';
import Logo from '../Logo/Logo'

function About() {
    return (
        <div className='container'>

            <h1 className='title'>Про мене</h1>
            <div className='about-box'>
                <Logo />
                <p className='contact-box'>Дозвольте мені представити себе - моє ім'я Христина, і я цілком нова у світі
                    фронтенд-розробки. Мені цікаво долучитися до проектів, де я зможу внести свій внесок та навчитися від досвідчених колег.
                    Я готова вкласти  всі свої зусилля для того, щоб стати успішним фронтенд-розробником та приносити користь команді та компанії.</p>
            </div>
        </div>

    );
}
export default About;
