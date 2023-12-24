// evergreen-ui paketinden SearchInput bileşeni alınır.
import { SearchInput } from 'evergreen-ui';

// Search bileşeni, arama işlemleri için kullanılır.
export default function Search({ query, onChange }) {
    // SearchInput bileşeni oluşturulur ve aşağıdaki özelliklerle konfigüre edilir:
    // - placeholder: Kullanıcıya ne tür bir arama yapması gerektiğini belirten metin.
    // - width: Bileşenin genişliği 280 piksel olarak ayarlanır.
    // - autoFocus: Sayfa yüklendiğinde otomatik olarak odaklanır, yani kullanıcı hemen arama yapmaya başlayabilir.
    // - value: Arama kutusundaki değer, dışarıdan geçirilen 'query' prop'u ile belirlenir.
    // - onChange: Arama kutusundaki değer değiştikçe tetiklenecek olan fonksiyon, dışarıdan geçirilen 'onChange' prop'u ile belirlenir.
    return (
        <SearchInput
            placeholder='Enter search term, for example: cats'
            width="280px"
            autoFocus
            value={query}
            onChange={onChange}
        />
    );
}
