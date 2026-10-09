// prodi.schema.js
import { z } from "zod";

export const storeProdiSchema = z.object({
    kode : z.string().trim().min(2, "Kode Prodi Minimal 2 karakter"),
    nama_prodi: z.string().trim().min(3, "Kode Prodi Minimal 3 karakter"),
    fakultas_id : z.string().trim().min(24, "Fakultas ID minimal 24 Karakter")
})

export const updateProdiSchema = z.object({
    kode : z.string().trim().min(2, "Kode Prodi Minimal 2 karakter"),
    nama_prodi: z.string().trim().min(3, "Kode Prodi Minimal 3 karakter"),
    fakultas_id : z.string().trim().min(24, "Fakultas ID minimal 24 Karakter")
})