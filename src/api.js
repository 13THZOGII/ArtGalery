// Bu fonksiyon, verilen bir sorguya göre sanat eserlerini aramak için kullanılır.
export const search = async (query) => {
    // API'nin URL'si belirlenir.
    const apiUrl = `https://api.artic.edu/api/v1/artworks/search`;

    // Sorgu parametreleri oluşturulur, sorgu metni (query), sonuç limiti (limit) ve istenen alanlar (fields) belirlenir.
    const qs = `?q=${query}&limit=32&fields=id,title,image_id,thumbnail`;

    // Belirlenen URL ve sorgu parametreleri ile API'ye istek yapılır ve sonuç beklenir.
    const res = await fetch(apiUrl + qs);

    // Eğer istek başarılı değilse, hata fırlatılır ve hata durumu ile ilgili bilgi içerir.
    if (!res.ok) {
        throw new Error(`error loading search results (${res.status})`);
    }

    // İstek başarılı ise, API'den gelen veriler JSON formatında döndürülür.
    return res.json();
};