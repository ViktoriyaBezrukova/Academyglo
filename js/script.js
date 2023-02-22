const filterByType = (type, ...values) => values.filter(value => typeof value === type),

	hideAllResponseBlocks = () => {
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		responseBlocksArray.forEach(block => block.style.display = 'none');
		// делает все элементы с классом div.dialog__response-block скрытыми
	},

	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		hideAllResponseBlocks();
		document.querySelector(blockSelector).style.display = 'block';
		if (spanSelector) {
			document.querySelector(spanSelector).textContent = msgText;
		}

	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),
	// при ошибке выводит спан с классом еррор
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
	// при выполнении выводит спан с классом ок
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
	// начальный текст
	tryFilterByType = (type, values) => {
		try {
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			const alertMsg = (valuesArray.length) ?
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
			showResults(alertMsg);
		} catch (e) {
			showError(`Ошибка: ${e}`);
		}
	};
// фильтр по типу данных, если найдены числа то выводит их.
const filterButton = document.querySelector('#filter-btn');

filterButton.addEventListener('click', e => {
	const typeInput = document.querySelector('#type');
	const dataInput = document.querySelector('#data');

	if (dataInput.value === '') {
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		showNoResults();
	} else {
		dataInput.setCustomValidity('');
		e.preventDefault();
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});
// кнопка которая при нажатии проверяет поля и выводит данные без пробелов.
