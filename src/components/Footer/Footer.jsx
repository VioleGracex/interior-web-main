import React from "react";
import Logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Информация о компании */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="логотип" className="w-6" />
              <p className="text-xl font-semibold">Интерьер</p>
            </div>
            <p>Москва, Россия</p>
            <p>@ 2025 Все права защищены</p>
          </div>
          {/* Ссылки футера */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">О нас</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Наша история</a>
                </li>
                <li>
                  <a href="#">Дизайнеры</a>
                </li>
                <li>
                  <a href="#">Мастерство</a>
                </li>
                <li>
                  <a href="#">Экологичность</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Поддержка</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Частые вопросы</a>
                </li>
                <li>
                  <a href="#">Доставка и возврат</a>
                </li>
                <li>
                  <a href="#">Инструкция по уходу</a>
                </li>
                <li>
                  <a href="#">Гарантия</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Контактная информация */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Связаться с нами</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone />
                <a href="#">+7 (900) 123-45-67</a>
              </li>
              <li className="flex items-center space-x-3">
                <LuMessageSquare />
                <a href="mailto:contact@interior.ru">Почта</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Нижняя часть */}
        <p className="text-center text-sm font-semibold border-t-2 pt-5 mt-5">
          &copy; 2025 Интерьер. Все права защищены
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
