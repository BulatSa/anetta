<!-- Модальные окна -->
<div class="modals-sec">

	<div id="modal-order" class="modal">
		<div class="modal__title">
			<p class="h2">Записаться на прием</p>
			<p class="modal__title-descr">Оставьте заявку и наш администратор свяжется с&nbsp;Вами в&nbsp;течение 10&nbsp;минут</p>
		</div>
		<form class="ajax-form">
			<label class="input__label">
				<span>Введите имя*</span>
				<input type="text" class="input-text" placeholder="Татьяна*" name="name" data-req="true" data-label="Имя пользователя">
			</label>
			<label class="input__label">
				<span>Введите телефон*</span>
				<input type="tel" class="input-text" placeholder="+7 (917) 555-55-55" name="phone" data-req="true" data-label="Телефон">
			</label>
			<label class="input__label">
				<span>Введите e-mail</span>
				<input type="email" class="input-text" placeholder="tanya@domen.ru" name="email" data-label="Email">
			</label>
			<input type="hidden" value="Новая заявка" name="form_subject">
			<label class="style-checkbox">
				<input type="checkbox" name="user-agree" data-req="true" checked data-label="Пользователь согласился с условиями">
				<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="/politics.rtf" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
			</label>
			<div class="btn-center">
				<button class="btn">отправить</button>
			</div>
		</form>
	</div>

	<div id="modal-call" class="modal">
		<div class="modal__title">
			<p class="h2">Заказать обратный звонок</p>
			<p class="modal__title-descr">Оставьте заявку и наш администратор свяжется с&nbsp;Вами в&nbsp;течение 10&nbsp;минут</p>
		</div>
		<form class="ajax-form">
			<label class="input__label">
				<span>Введите имя*</span>
				<input type="text" class="input-text" placeholder="Татьяна*" name="name" data-req="true" data-label="Имя пользователя">
			</label>
			<label class="input__label">
				<span>Введите телефон*</span>
				<input type="tel" class="input-text" placeholder="+7 (917) 555-55-55" name="phone" data-req="true" data-label="Телефон">
			</label>
			<label class="input__label">
				<span>Введите e-mail</span>
				<input type="email" class="input-text" placeholder="tanya@domen.ru" name="email" data-label="Email">
			</label>
			<input type="hidden" value="Новая заявка" name="form_subject">
			<label class="style-checkbox">
				<input type="checkbox" name="user-agree" data-req="true" checked data-label="Пользователь согласился с условиями">
				<span class="checkbox-personal">Нажимая на кнопку "Отправить", я даю согласие на обработку персональных данных и соглашаюсь с <a href="/politics.rtf" target="_blank" rel="nofollow">условиями политики конфиденциальности</a></span>
			</label>
			<div class="btn-center">
				<button class="btn">отправить</button>
			</div>
		</form>
	</div>

	<div id="modal-thanks" class="modal modal--thanks">
		<p class="h2">Спасибо за заявку!</p>
	</div>

	<div id="modal-error" class="modal">
		<p>Что-то пошло не так.</p>
		<p>Попробуйте еще раз.</p>
		<p>Если постоянно видите эту ошибку, пожалуйста, обратитесь к администратору сайта. Мы будем очень благодарны.</p>
	</div>

</div>
<!-- Модальные окна -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="js/assets.js" type="text/javascript" ></script>
<script src="js/main.js?<?=date("B");?>" type="text/javascript" ></script>

	</body>
</html>
