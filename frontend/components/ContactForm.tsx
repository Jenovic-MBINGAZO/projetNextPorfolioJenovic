"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  MessageSquare,
  Tag,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Le nom est requis";
    }
    if (name.trim().length < 2) {
      return "Le nom doit contenir au moins 2 caractères";
    }
    if (name.trim().length > 50) {
      return "Le nom ne peut pas dépasser 50 caractères";
    }
    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(name.trim())) {
      return "Le nom ne peut contenir que des lettres, espaces, apostrophes et tirets";
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "L'email est requis";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Veuillez entrer une adresse email valide";
    }
    if (email.length > 100) {
      return "L'email ne peut pas dépasser 100 caractères";
    }
    return undefined;
  };

  const validateSubject = (subject: string): string | undefined => {
    if (!subject.trim()) {
      return "L'objet est requis";
    }
    if (subject.trim().length < 3) {
      return "L'objet doit contenir au moins 3 caractères";
    }
    if (subject.trim().length > 100) {
      return "L'objet ne peut pas dépasser 100 caractères";
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return "Le message est requis";
    }
    if (message.trim().length < 10) {
      return "Le message doit contenir au moins 10 caractères";
    }
    if (message.trim().length > 1000) {
      return "Le message ne peut pas dépasser 1000 caractères";
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const subjectError = validateSubject(formData.subject);
    const messageError = validateMessage(formData.message);

    if (nameError) newErrors.name = nameError;
    if (emailError) newErrors.email = emailError;
    if (subjectError) newErrors.subject = subjectError;
    if (messageError) newErrors.message = messageError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }

    // Reset status when user modifies form
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let error: string | undefined;

    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "subject":
        error = validateSubject(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
    }

    if (error) {
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      // Remplacez ces valeurs par vos propres clés EmailJS
      await emailjs.send(
        "service_5hg4j9s",
        "template_8chsene",
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          to_name: "Jenovic", // Votre nom
        },
        "nvK76dcy5koFhhFTU"
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const getInputClassName = (fieldName: keyof FormErrors) => {
    const baseClass =
      "w-full p-3 pl-10 bg-white dark:bg-black border rounded-lg focus:ring-2 focus:ring-red-600 outline-none text-gray-900 dark:text-white transition-colors";

    const errorClass = errors[fieldName]
      ? "border-red-500"
      : "border-gray-300 dark:border-gray-700";

    return `${baseClass} ${errorClass}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-[#1E1E1E]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Contact
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          {/* Name Field */}
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClassName("name")}
                maxLength={50}
              />
            </div>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </motion.p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Adresse email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClassName("email")}
                maxLength={100}
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="subject"
                placeholder="Objet du message"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClassName("subject")}
                maxLength={100}
              />
            </div>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.subject}
              </motion.p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <textarea
                name="message"
                placeholder="Votre message..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${getInputClassName("message")} pt-3`}
                maxLength={1000}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              {errors.message ? (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </motion.p>
              ) : (
                <div />
              )}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formData.message.length}/1000
              </span>
            </div>
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg"
            >
              <CheckCircle className="w-5 h-5" />
              <span>
                Message envoyé avec succès ! Je vous répondrai bientôt.
              </span>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg"
            >
              <AlertCircle className="w-5 h-5" />
              <span>
                Erreur lors de l&apos;envoi. Veuillez réessayer ou me contacter
                directement.
              </span>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={
              isLoading ||
              Object.keys(errors).some((key) => errors[key as keyof FormErrors])
            }
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Envoyer le message
              </>
            )}
          </motion.button>

          {/* Form Info */}
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Vos informations sont sécurisées et ne seront jamais partagées.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
