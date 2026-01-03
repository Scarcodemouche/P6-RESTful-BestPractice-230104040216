Dokumentasi & Review

Table EndPoint

| Method                      | Endpoint        | Deskripsi                                | Status  |
|-----------------------------|-----------------|------------------------------------------|---------|
| GET ALL                     | /api/products   | ambil semua produk                       | 200     |
| GET BY ID                   | /api/products/1 | ambil produk by ID                       | 200     |
| POST NEW PRODUCTS           | /api/products   | tambah produk baru                       | 201     |
| UPDATE PRODUCTS             | /api/products/1 | update produk                            | 200     |
| PATCH ID 1                  | /api/products/1 | mengubah produk                          | 200     |
| DELETE ID 1                 | /api/products/1 | menghapus produk                         | 200     |
| POST NO NAME                | /api/products   | test post produk tanpa nama              | 400     |
| POST NO PRICE               | /api/products   | test post produk tanpa harga             | 400     |
| POST NO NAME & PRICE        | /api/products   | test post produk tanpa nama dan harga    | 400     |
| ERROR ENDPOINT TEST         | /api/products/crash/test| test error website               | 500     |
| HEALTH ENDPOINT TEST        | /api/health      | test keamanan website                   | 200     |


1.sudah diterapkan 7 API principle dalam membangun project yang diarahkan oleh bapak dosen termasuk /api/health dan error test
2.kesulitannya lebih ke personal karena saya terkadang salah baca coding dan kurang bisa beradaptasi apabila coding update terjadi dan tidak tahu dimana meletakkannya