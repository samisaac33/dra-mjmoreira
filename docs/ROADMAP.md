# Proyecto digital — Dra. María José Moreira

Pediatría y nutrición pediátrica · Portoviejo

Este repositorio es la base de un proyecto de consultorio en fases. El sitio web público es la **Fase 0** (carta de presentación).

## Fase 0 — Fundación (actual)

- [x] Sitio web profesional (mobile-first, SEO básico)
- [x] Páginas: inicio, servicios, sobre la doctora, contacto, aviso de privacidad
- [x] Google Business Profile (guía en `docs/google-business-profile.md`)
- [ ] WhatsApp / teléfono / email en `src/content/practice.json`
- [ ] Foto profesional y dirección del consultorio
- [ ] Despliegue (Vercel u otro) + dominio propio

## Fase 1 — Agenda viva

- [ ] Tipos de cita (primera vez, control nutrición, control pediatría, etc.) con duración
- [ ] Chatbot en la web + WhatsApp Business, misma agenda
- [ ] Sincronización con calendario (Google Calendar / proveedor de booking)
- [ ] Confirmación, recordatorio y cancelación de citas

## Fase 2 — Relación con pacientes

- [ ] Correos transaccionales (confirmación, recordatorio, indicaciones)
- [ ] Portal del paciente (citas, documentos, formularios preconsulta)
- [ ] Pagos / anticipos y política de cancelación
- [ ] Solicitud ética de reseñas post-consulta

## Fase 3 — Expediente (con cumplimiento legal)

- [ ] Roles (médico, recepción, paciente)
- [ ] Ficha clínica e historial de visitas
- [ ] Consentimientos y documentos
- [ ] Respaldo, auditoría de accesos y aviso de privacidad vigente

## Fase 4 — Crecimiento

- [ ] Contenido educativo (nutrición infantil, percentiles, alergias)
- [ ] Seguimiento entre consultas (planes, recordatorios de controles)
- [ ] Teleconsulta donde aplique
- [ ] Referidos con red de especialistas de confianza

## Stack técnico

| Capa | Tecnología |
|------|------------|
| Sitio y APIs | Next.js (App Router), TypeScript |
| Estilos | Tailwind CSS |
| Hosting | Vercel (recomendado) |
| DB (Fase 2+) | PostgreSQL (Neon / Supabase) |
| Correo | Resend / SendGrid |
| WhatsApp | WhatsApp Business API (proveedor) |

## Comandos locales

```bash
npm run dev    # http://localhost:3000
npm run build
npm run lint
```
