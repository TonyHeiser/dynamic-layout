/**Динамическое создание карточек
 * 
 * На странице уже есть сетка для карточек:
 * <ul class="main__cards"></ul>
 * 
 * И массив данных для карточек: fetchedData
 * Задача:

    1. Пройтись по массиву fetchedData.

    2. Для каждого элемента создать <li> с классами: card, card{номер} (например, card1, card2 … card20)

    3. Установить фоновое изображение карточки через JS (background-image).

    4. Вставить внутрь <li> HTML:
    <h2 class="card__title">{подумайте}</h2>
    <div class="down-under">
      <p class="card__description">{что тут}</p>
      <div class="card__price-btn">
        <span class="card__price">{надо}</span>
        <button class="card__btn">вставить</button>
      </div>
    </div>

    5. Добавить <li> в контейнер .main__cards.

  * Использовать только DOM-методы (createElement, appendChild, innerHTML и т.п.).
  * Не трогать CSS и HTML — они уже готовы.
  * Готовый результат должен быть как в result.png или похожим
 */

const fetchedData = [
  { name: "Stuff Name 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: 2399, image: "media/a1.png" },
  { name: "Stuff Name 2", description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", price: 0.99, image: "media/a2.jpg"  },
  { name: "Stuff Name 3", description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book.", price: (Math.random() * 50).toFixed(2), image: "media/a3.jpg"   },
  { name: "Stuff Name 4", description: "It has survived not only five centuries.", price: (Math.random() * 10).toFixed(2), image: "media/a4.jpg"   },
  { name: "Stuff Name 5", description: "But also the leap into electronic typesetting, remaining essentially unchanged.", price: (Math.random() * 90).toFixed(2), image: "media/a5.jpg"   },
  { name: "Stuff Name 6", description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.", price: (Math.random() * 150).toFixed(2), image: "media/a6.jpg"   },
  { name: "Stuff Name 7", description: "Contrary to popular belief, Lorem Ipsum is not simply random text.", price: (Math.random() * 100).toFixed(2), image: "media/a7.jpg"   },
  { name: "Stuff Name 8", description: "It has roots in a piece of classical Latin literature from 45 BC.", price: (Math.random() * 100).toFixed(2), image: "media/a8.jpeg"   },
  { name: "Stuff Name 9", description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.", price: (Math.random() * 100).toFixed(2), image: "media/a9.jpg"   },
  { name: "Stuff Name 10", description: "Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form.", price: (Math.random() * 100).toFixed(2), image: "media/a10.jpg"   },
  { name: "Stuff Name 11", description: "There are many variations of passages of Lorem Ipsum available.", price: (Math.random() * 100).toFixed(2), image: "media/a11.jpg"   },
  { name: "Stuff Name 12", description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.", price: (Math.random() * 100).toFixed(2), image: "media/a12.jpg" },
  { name: "Stuff Name 13", description: "Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.", price: (Math.random() * 100).toFixed(2), image: "media/a13.jpg" },
  { name: "Stuff Name 14", description: "It is a long established fact that a reader will be distracted by the readable content.", price: (Math.random() * 100).toFixed(2), image: "media/a14.jpg" },
  { name: "Stuff Name 15", description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.", price: (Math.random() * 100).toFixed(2), image: "media/a15.jpg" },
  { name: "Stuff Name 16", description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.", price: (Math.random() * 100).toFixed(2), image: "media/a16.jpg" },
  { name: "Stuff Name 17", description: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose.", price: (Math.random() * 100).toFixed(2), image: "media/a17.jpg" },
  { name: "Stuff Name 18", description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'.", price: (Math.random() * 100).toFixed(2), image: "media/a18.jpg" },
  { name: "Stuff Name 19", description: "This book is a treatise on the theory of ethics, very popular during the Renaissance.", price: (Math.random() * 100).toFixed(2), image: "media/a19.jpg" },
  { name: "Stuff Name 20", description: "The generated Lorem Ipsum text here is intended purely for placeholder purposes.", price: (Math.random() * 100).toFixed(2), image: "media/a20.png"   },
];