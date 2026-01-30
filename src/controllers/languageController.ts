import type { Request, Response, NextFunction } from "express";

export async function getLanguage(req: Request, res: Response, next: NextFunction) {
    try{
        const languages = {
            "en": {
      "toasts": {
        "message": {
          "no_dates_found": "No dates found. There might be an error or internal limit exceed in the system. Next check will happen after 30 minutes.",
          "checked_dates": {
            "string": "Checked for dates between %start% and %end% @ %now%",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Your current appointment is on %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "Latest availability: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Earlier date found: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "No time slots found on date: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "Next check will be at: %date% in <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Application Type Confirmation",
          "message": {
            "line1": "Please select if you applying for the Immigrant Visa or Non-Immigrant Visa to proceed.",
            "line2": "Also, this extension requires you to already have an appointment in a future date. If you do not have an appointment, please uninstall the extension immediately."
          },
          "buttons": {
            "confirm": "Non-Immigrant Visa",
            "deny": "Immigrant Visa"
          }
        },
        "en_lang": {
          "heading": "Language Confirmation",
          "message": {
            "line1": "This extension is designed and optimized to work with the English version of the site. This is because of the different ways a calendar date is written in different languages.",
            "line2": "It is highly recommended to switch to the English version."
          },
          "buttons": {
            "confirm": "Switch to English",
            "deny": "Don't switch"
          }
        },
        "country_limit": {
          "heading": "Supported Countries",
          "message": {
            "line1": "If you do no see the country on this page <em>(ex: India, Pakistan)</em>, this extension is not for you. The developer cannot do anything about this. Sorry.",
            "line2": "Please select your country to proceed"
          },
          "buttons": {
            "confirm": "OK"
          }
        },
        "ext_usage": {
          "heading": "Extension Usage Guidelines",
          "message": {
            "line1": "This extension is designed to be used by individuals who already have appointment and are looking to move their appointment date ahead.",
            "line2": "There have been reports that certain embassies have limited the number of times you can reschedule. To minimize this, the extension allows you to check for slots within a specific date range.",
            "line3": "If you see a message from this portal informing you that you can only reschedule a certain number of times, it is recommended to stop using the extension. The developer will not be responsible for any fallout after you see that warning."
          },
          "buttons": {
            "confirm": "I consent to use this extension within its limits"
          }
        },
        "update": {
          "heading": "Updates",
          "message": {
            "line1": "This version of the extension allows you to change your city without having to reset.",
            "line2": "Click on the \"See Updates\" button to see the updates in this version."
          },
          "buttons": {
            "confirm": "Skip",
            "cancel": "See Updates"
          }
        },
        "login": {
          "heading": "Enter your credentials",
          "message": "Please provide the email and password for your Visa application. The extension will use this to login if you are logged out. No details will be saved.",
          "error": "Invalid email or password",
          "label": {
            "email": "Your email address",
            "password": "Your password"
          },
          "placeholder": {
            "email": "Enter your email address",
            "password": "Enter your password"
          },
          "buttons": {
            "confirm": "Log in"
          },
          "footer": "The extension is not active yet. Please complete the log in."
        },
        "scheduling_limit": {
          "heading": "Wait! Read this entire message carefully!",
          "message": {
            "line1": "The extension has detected that the website has limited how many times you can reschedule your appointment going forward. While the extension can still automate rescheduling, you will risk losing your remaining reschedule attempts for the dates you do not want.",
            "line2": "If you wish to proceed with automation, the developer strongly recommends you to turn off autobook setting so you can manually approve new rescheduling.",
            "line3": "This is your last warning from the developer."
          },
          "buttons": {
            "confirm": "I'll do it manually",
            "deny": "Automate"
          }
        },
        "appointments": {
          "heading": "Select your appointment",
          "message": "There are multiple appointments in your account. Please select the appointment you wish to run the script for.",
          "buttons": {
            "confirm": "Confirm"
          },
          "footer": "The extension is not active yet. Please select the correct appointment."
        },
        "side_panel": {
          "heading": "Settings have moved to a new area",
          "message": "You can now right-click anywhere on the page and select \"USA Visa Auto Rescheduler\" to access the settings.",
          "buttons": {
            "confirm": "Open settings now",
            "deny": "I'll check it later"
          }
        },
        "first_appointment": {
          "heading": "You cannot use this extension.",
          "message": "This extension requires you to already have an appointment in a future date. If you do not have an appointment, please remove the extension immediately.",
          "buttons": {
            "confirm": "OK"
          }
        },
        "frequency": {
          "heading": "Frequency of checks",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "The extension will check for earlier appointments every <strong>%minutes% minutes</strong>",
              "line2": "Please change the settings below if you wish to change the frequency. You can use your mouse or left \"<\" and right \">\" arrows to change the value."
            }
          },
          "buttons": {
            "confirm": "Confirm"
          },
          "footer": "The extension is not active yet. This is the last step before the extension is activated."
        },
        "init": {
          "heading": "All set!",
          "asc_type": {
            "false": "at first available date",
            "true": "closest to VISA appointment"
          },
          "activated": "The extension is now activated",
          "message": {
            "string": {
              "line1": "The extension is activate for <strong>%email%</strong> and will use the date <strong>%date%</strong> to find earlier appointments in %city%.",
              "line2": "The extension will schedule ASC appointment in <strong>%ascLocation%</strong> %ascType%.",
              "line3": "If this is not correct, please stop using the extension and contact the developer immediately. This message will automatically close in %timer% seconds.",
              "line4": "You can manage autobook and appoitment date options in the settings area."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "Attention please!",
          "message": "Your current appointment date is not detected. Please enter the date below to proceed.",
          "err_message": "Enter the correct date please.",
          "buttons": {
            "confirm": "Confirm"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "Attention please!",
            "deactivated": "Extension deactivated"
          },
          "message": {
            "warning": "The extension is active on another tab. Any change you make on this page will impact the extension. If you wish to proceed making changes to this page, click the button below to deactivate the extension.",
            "deactivated": "You can activate the extension again from the settings area. In case you have closed the previously active tab, the current tab will become the active tab."
          },
          "buttons": {
            "warning": {
              "confirm": "Deactivate"
            },
            "deactivated": {
              "confirm": "Understood"
            }
          }
        },
        "locations": {
          "heading": "Please select",
          "message": {
            "consular": {
              "string": "Your current interview location is set to <strong>%city%</strong>. To change your location, select the City in the box below and submit.",
              "is_dynamic": true
            },
            "asc": {
              "string": "Your current ASC location is set to <strong>%city%</strong>. To change your location, select the City in the box below and submit.",
              "is_dynamic": true
            },
            "asc_type": "When would you like to schedule your ASC appointment?"
          },
          "asc_input_options": {
            "false": "First available date",
            "true": "Closest to VISA appointment"
          },
          "buttons": {
            "confirm": "Confirm"
          },
          "footer": {
            "consular": "The extension is not active yet. Confirm the location of your Consular Appointment.",
            "asc": "The extension is not active yet. Confirm the location of your ASC Appointment."
          }
        },
        "error": {
          "heading": "Something is wrong here!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "Stop spamming the requests. The extension is designed to reload the webpage on its own. This is your first warning. You're timed out for %seconds% seconds. A repeat of this will result in your email permaban.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "You're using an outdated version %oldV% of the plugin. Please update to %newV% it using chrome extension store to continue using it.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "You can only use this extension for %limit% free accounts every 30 days from this IP <strong>[%ip%]</strong>. You can either purchase credits for previous accounts or contact the developer for other options. Please mention this IP in the email.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "You are not able to use this extension for rescheduling in %city%.",
                  "line2": "%reason%",
                  "line3": "If you are a genuine user, please send an email to the developer for unlocking."
                },
                "is_dynamic": true
              },
              "email_banned": "Your email is banned from this extension for spamming.",
              "ip_banned": "Your IP is perma-banned. Pound sand.",
              "invalid_signature": "You are using an invalid extension. Please download the correct extension from the Chrome Web Store. Click <a href='' target='_blank'>here</a> to download the correct extension.",
              "no_email": "Oops. The extension did not identify your email. Please refresh the page. If you are seeing this error for the more than once, Please stop using the plugin immediately and send an email to the developer.",
              "no_date": "Oops. The extension did not identify your current appointment date. Please refresh the page. If you see the message the second time, try signing out. If you still see this message, stop using the plugin immediately and send an email to the developer.",
              "reset_count_reached": "You have reached the limit of free credit recharges. Please consider buying the developer a coffee to get unlimited credits.",
              "already_paid": "You have already paid for unlimited credits. Do you still wish to buy more coffees to the developer?"
            },
            "browser": "To prevent an infinite loop, the extension will turn itself off and log you out now."
          },
          "buttons": {
            "confirm": "OK"
          }
        },
        "credits_exhausted": {
          "heading": "You're out of credits!",
          "message": {
            "recharge": {
              "string": {
                "line1": "Your credits for the extension are exhausted. Please use options below to recharge.",
                "line2": "You have <strong>%resets% free recharge.</strong>",
                "line3": "Alternatively you can buy the developer a coffee to receive unlimited credits."
              },
              "is_dynamic": true
            },
            "buy_coffee": "Your credits for the extension are exhausted. Please buy the developer a coffee to receive unlimited credits.",
            "waiting_for_completion": {
              "string": {
                "line1": "Please complete the donation for %email%.",
                "line2": "After completing the payment, please refresh this page. The extension will automatically update your credits."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Free Recharge",
            "confirm": "Buy ☕ for the Developer"
          }
        }
      },
      "browser_notification": {
        "header": "New Appointment Found",
        "message": {
          "string": "Hi there. The extension found a new appointment on %date%. Book now before it's gone!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Book",
          "ignore": "Ignore"
        }
      },
      "settings": {
        "inactive": "This area will be displayed once you activate the extension, and complete the login and finish all the pop-up steps.",
        "credits": "Credits left.",
        "donate": "Buy ☕ for the Developer 🙂",
        "unlimited": "Any donation will get you unlimited credits.",
        "locale": "Extension language",
        "info": "The settings are for below appointment:",
        "account_email": {
          "is_dynamic": true,
          "string": "Account Email: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "Account Ext. ID: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "Appointment ID: <strong>%appointmentId%</strong>"
        },
        "support": "For any support from the developer, please provide the Account Ext. ID and send an email to guduriabhinay@gmail.com. Click here to <a id=\"send_email\" href=\"#\">send an email</a>",
        "activate": "Activate the script",
        "autobook": "Autobook appointments",
        "frequency": {
          "is_dynamic": true,
          "string": "Frequency of checks (every %frequency% minutes)"
        },
        "cities": "City for interview",
        "startDate": "Start Date",
        "endDate": "End Date",
        "reset": "Reset Everything",
        "faqs": "Read FAQs",
        "updates": "See all updates"
      }
    }, 

    "de":{
      "toasts": {
        "message": {
          "no_dates_found": "Keine Termine gefunden. Möglicherweise liegt ein Fehler vor oder das interne Limit wurde überschritten. Die nächste Prüfung erfolgt nach 30 Minuten.",
          "checked_dates": {
            "string": "Es wurde nach Datumsangaben zwischen %start% und %end% @ %now% gesucht.",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Ihr aktueller Termin ist am %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "Letzte Verfügbarkeit: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Früheres gefundenes Datum: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "Keine Zeitfenster gefunden am: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "Die nächste Überprüfung erfolgt um: %date% in <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Bestätigung des Anwendungstyps",
          "message": {
            "line1": "Bitte wählen Sie aus, ob Sie das Einwanderungsvisum oder das Nichteinwanderungsvisum beantragen, um fortzufahren.",
            "line2": "Außerdem erfordert diese Verlängerung, dass Sie bereits einen Termin zu einem späteren Zeitpunkt haben. Sollten Sie keinen Termin haben, deinstallieren Sie die Erweiterung bitte umgehend."
          },
          "buttons": {
            "confirm": "Nichteinwanderungsvisum",
            "deny": "Einwanderungsvisum"
          }
        },
        "en_lang": {
          "heading": "Bestätigung der Sprache",
          "message": {
            "line1": "Diese Erweiterung wurde für die Verwendung mit der englischen Version der Website entwickelt und optimiert. Dies liegt an der unterschiedlichen Schreibweise eines Kalenderdatums in verschiedenen Sprachen.",
            "line2": "Es wird dringend empfohlen, auf die englische Version umzusteigen."
          },
          "buttons": {
            "confirm": "Zur englischen Sprache wechseln",
            "deny": "Nicht wechseln"
          }
        },
        "country_limit": {
          "heading": "Unterstützte Länder",
          "message": {
            "line1": "Wenn Sie das Land auf dieser Seite nicht sehen <em>(z. B. Indien, Pakistan),</em> ist diese Erweiterung nicht für Sie geeignet. Der Entwickler kann nichts dagegen tun. Tut mir Leid.",
            "line2": "Bitte wählen Sie Ihr Land aus, um fortzufahren"
          },
          "buttons": {
            "confirm": "Okay"
          }
        },
        "ext_usage": {
          "heading": "Richtlinien für die Verwendung von Erweiterungen",
          "message": {
            "line1": "Diese Erweiterung ist für Personen gedacht, die bereits einen Termin haben und ihren Termin nach vorne verschieben möchten.",
            "line2": "Es gibt Berichte, dass bestimmte Botschaften die Anzahl der Verschiebungen begrenzt haben. Um dies zu minimieren, können Sie mit der Erweiterung nach Slots innerhalb eines bestimmten Datumsbereichs suchen.",
            "line3": "Wenn Sie eine Meldung von dieser Website sehen, die Sie darüber informiert, dass Sie nur eine bestimmte Anzahl von Malen verschieben können, wird empfohlen, die Erweiterung nicht mehr zu verwenden. Der Entwickler ist nicht verantwortlich für etwaige Auswirkungen, nachdem Sie diese Warnung gesehen haben."
          },
          "buttons": {
            "confirm": "Ich bin damit einverstanden, diese Erweiterung innerhalb ihrer Grenzen zu verwenden"
          }
        },
        "update": {
          "heading": "Aktualisierungen",
          "message": {
            "line1": "Diese Version der Erweiterung ermöglicht es Ihnen, Ihre Stadt zu ändern, ohne sie zurücksetzen zu müssen.",
            "line2": "Klicken Sie auf die Schaltfläche <b>Updates anzeigen</b>, um die Updates in dieser Version anzuzeigen."
          },
          "buttons": {
            "confirm": "Hüpfen",
            "cancel": "Updates anzeigen"
          }
        },
        "login": {
          "heading": "Geben Sie Ihre Zugangsdaten ein",
          "message": "Bitte geben Sie die E-Mail-Adresse und das Passwort für Ihren Visumantrag an. Die Erweiterung verwendet dies, um sich anzumelden, wenn Sie abgemeldet sind. Alle Angaben vertraulich und geschützt.",
          "error": "Ungültige E-Mail-Adresse oder ungültiges Passwort",
          "label": {
            "email": "Ihre E-Mail-Adresse",
            "password": "Ihr Passwort"
          },
          "placeholder": {
            "email": "Geben Sie Ihre E-Mail-Adresse ein",
            "password": "Geben Sie Ihr Passwort ein"
          },
          "buttons": {
            "confirm": "Anmelden"
          },
          "footer": "Die Erweiterung ist noch nicht aktiv. Bitte schließen Sie die Anmeldung ab."
        },
        "scheduling_limit": {
          "heading": "Warten Sie! Lesen Sie diese Nachricht sorgfältig durch!",
          "message": {
            "line1": "Die Erweiterung hat festgestellt, dass die Website die Anzahl der möglichen Terminverschiebungen begrenzt. Die Erweiterung kann zwar weiterhin automatische Verschiebungen durchführen, Sie riskieren jedoch, Ihre verbleibenden Verschiebungsversuche für unerwünschte Termine zu verlieren.",
            "line2": "Wenn Sie die Automatisierung nutzen möchten, empfiehlt der Entwickler dringend, die automatische Buchung zu deaktivieren, damit Sie neue Verschiebungen manuell bestätigen können.",
            "line3": "Dies ist Ihre letzte Warnung vom Entwickler."
          },
          "buttons": {
            "confirm": "Ich werde es manuell durchführen",
            "deny": "Automatisieren"
          }
        },
        "appointments": {
          "heading": "Wählen Sie Ihren Termin",
          "message": "In Ihrem Konto gibt es mehrere Termine. Bitte wählen Sie den Termin aus, für den Sie das Skript ausführen möchten.",
          "buttons": {
            "confirm": "Bestätigen"
          },
          "footer": "Die Erweiterung ist noch nicht aktiv. Bitte wählen Sie den richtigen Termin aus."
        },
        "side_panel": {
          "heading": "Die Einstellungen wurden in einen neuen Bereich verschoben",
          "message": "Sie können jetzt mit der rechten Maustaste auf eine beliebige Stelle auf der Seite klicken und \"USA Visa Auto Rescheduler\" auswählen, um auf die Einstellungen zuzugreifen.",
          "buttons": {
            "confirm": "Jetzt Einstellungen öffnen",
            "deny": "Ich werde es später überprüfen"
          }
        },
        "first_appointment": {
          "heading": "Sie können diese Erweiterung nicht verwenden.",
          "message": "Diese Verlängerung setzt voraus, dass Sie bereits einen Termin zu einem späteren Zeitpunkt haben. Sollten Sie keinen Termin haben, entfernen Sie die Verlängerung bitte umgehend.",
          "buttons": {
            "confirm": "OKAY"
          }
        },
        "frequency": {
          "heading": "Häufigkeit der Überprüfungen",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "Die Durchwahl sucht alle <strong>%minutes% minutes</strong> nach früheren Terminen.",
              "line2": "Bitte ändern Sie die Einstellungen unten, wenn Sie die Häufigkeit ändern möchten. Sie können die Maus oder die Pfeile nach links \"<\" und rechts \">\" verwenden, um den Wert zu ändern."
            }
          },
          "buttons": {
            "confirm": "Bestätigen"
          },
          "footer": "Die Erweiterung ist noch nicht aktiv. Dies ist der letzte Schritt, bevor die Erweiterung aktiviert wird."
        },
        "init": {
          "heading": "Fertig!",
          "asc_type": {
            "false": "zum ersten verfügbaren Termin",
            "true": "am nächsten zum VISA-Termin"
          },
          "activated": "Die Erweiterung ist nun aktiviert",
          "message": {
            "string": {
              "line1": "Die Erweiterung ist für <strong>%email%</strong> aktiviert und verwendet das Datum <strong>%date%</strong>, um frühere Termine in %city% zu finden.",
              "line2": "Die Erweiterung plant einen ASC-Termin in <strong>%ascLocation%</strong> %ascType%.",
              "line3": "Wenn dies nicht korrekt ist, verwenden Sie die Erweiterung nicht mehr und wenden Sie sich sofort an den Entwickler. Diese Meldung wird automatisch in %timer% Sekunden geschlossen.",
              "line4": "Sie können die Optionen für die automatische Buchung und das Termindatum im Einstellungsbereich verwalten."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "Achtung bitte!",
          "message": "Ihr aktuelles Termindatum wird nicht erkannt. Bitte geben Sie das untenstehende Datum ein, um fortzufahren.",
          "err_message": "Geben Sie bitte das richtige Datum ein.",
          "buttons": {
            "confirm": "Bestätigen"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "Achtung bitte!",
            "deactivated": "Erweiterung deaktiviert"
          },
          "message": {
            "warning": "Die Erweiterung ist auf einer anderen Registerkarte aktiv. Jede Änderung, die Sie auf dieser Seite vornehmen, wirkt sich auf die Erweiterung aus. Wenn Sie Änderungen an dieser Seite vornehmen möchten, klicken Sie auf die Schaltfläche unten, um die Erweiterung zu deaktivieren.",
            "deactivated": "Sie können die Erweiterung über den Einstellungsbereich wieder aktivieren. Falls Sie den zuvor aktiven Tab geschlossen haben, wird der aktuelle Tab zum aktiven Tab."
          },
          "buttons": {
            "warning": {
              "confirm": "Deaktivieren"
            },
            "deactivated": {
              "confirm": "Verstanden"
            }
          }
        },
        "locations": {
          "heading": "Bitte auswählen",
          "message": {
            "consular": {
              "string": "Der aktuelle Ort des Vorstellungsgesprächs ist auf <strong>%city%</strong> festgelegt. Um Ihren Standort zu ändern, wählen Sie die Stadt im Feld unten aus und senden Sie sie ab.",
              "is_dynamic": true
            },
            "asc": {
              "string": "Ihr aktueller ASC-Standort ist auf <strong>%city%</strong> festgelegt. Um Ihren Standort zu ändern, wählen Sie die Stadt im Feld unten aus und senden Sie sie ab.",
              "is_dynamic": true
            },
            "asc_type": "Wann möchten Sie Ihren ASC-Termin vereinbaren?"
          },
          "asc_input_options": {
            "false": "Erstes verfügbares Datum",
            "true": "Am nächsten zum VISA-Termin"
          },
          "buttons": {
            "confirm": "Bestätigen"
          },
          "footer": {
            "consular": "Die Erweiterung ist noch nicht aktiv. Bestätigen Sie den Ort Ihres Konsulartermins.",
            "asc": "Die Erweiterung ist noch nicht aktiv. Bestätigen Sie den Ort Ihres ASC-Termins."
          }
        },
        "error": {
          "heading": "Hier stimmt etwas nicht!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "Hören Sie auf, die Anfragen zu spammen. Die Erweiterung ist so konzipiert, dass sie die Webseite selbstständig neu lädt. Dies ist Ihre erste Warnung. Sie haben eine Zeitüberschreitung von %seconds% Sekunden. Eine Wiederholung davon führt zu Ihrem E-Mail-Permaban.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "Sie verwenden eine veraltete Version %oldV% des Plugins. Bitte aktualisieren Sie es mit dem Chrome Extension Store auf %newV%, um es weiterhin zu verwenden.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "Sie können diese Erweiterung nur alle 30 Tage ab dieser IP <strong>[%ip%]</strong> für %limit%-kostenlose Konten verwenden. Sie können entweder Credits für frühere Konten erwerben oder sich für andere Optionen an den Entwickler wenden. Bitte geben Sie diese IP in der E-Mail an.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "Sie können diese Erweiterung nicht für die Umplanung in %city% verwenden.",
                  "line2": "%reason%",
                  "line3": "Wenn Sie ein echter Benutzer sind, senden Sie bitte eine E-Mail an den Entwickler zum Entsperren."
                },
                "is_dynamic": true
              },
              "email_banned": "Ihre E-Mail ist von dieser Erweiterung für Spam gesperrt.",
              "ip_banned": "Ihre IP ist dauerhaft gesperrt. Sand stampfen.",
              "invalid_signature": "Sie verwenden eine ungültige Erweiterung. Bitte laden Sie die richtige Erweiterung aus dem Chrome Web Store herunter. Klicken Sie <a href='' target='_blank'>hier</a> um die richtige Erweiterung herunterzuladen.",
              "no_email": "Hoppla. Die Erweiterung hat Ihre E-Mail-Adresse nicht identifiziert. Bitte aktualisieren Sie die Seite. Wenn Sie diesen Fehler mehr als einmal sehen, Bitte beenden Sie die Verwendung des Plugins sofort und senden Sie eine E-Mail an den Entwickler.",
              "no_date": "Hoppla. Die Verlängerung hat Ihr aktuelles Termindatum nicht angegeben. Bitte aktualisieren Sie die Seite. Wenn die Meldung zum zweiten Mal angezeigt wird, versuchen Sie, sich abzumelden. Wenn Sie diese Meldung weiterhin sehen, beenden Sie die Verwendung des Plugins sofort und senden Sie eine E-Mail an den Entwickler.",
              "reset_count_reached": "Sie haben das Limit der kostenlosen Aufladung von Guthaben erreicht. Bitte erwägen Sie, dem Entwickler einen Kaffee zu kaufen, um unbegrenzt Credits zu erhalten.",
              "already_paid": "Sie haben bereits für unbegrenztes Guthaben bezahlt. Möchten Sie noch mehr Kaffees an den Entwickler kaufen?"
            },
            "browser": "Um eine Endlosschleife zu verhindern, schaltet sich die Erweiterung aus und meldet Sie jetzt ab."
          },
          "buttons": {
            "confirm": "OKAY"
          }
        },
        "credits_exhausted": {
          "heading": "Sie haben keine Credits mehr!",
          "message": {
            "recharge": {
              "string": {
                "line1": "Ihr Guthaben für die Verlängerung ist erschöpft. Bitte verwenden Sie die unten stehenden Optionen, um aufzuladen.",
                "line2": "Sie haben <strong>%resets% kostenloses Aufladen.</strong>",
                "line3": "Alternativ können Sie dem Entwickler einen Kaffee kaufen, um unbegrenzt Credits zu erhalten."
              },
              "is_dynamic": true
            },
            "buy_coffee": "Ihr Guthaben für die Verlängerung ist erschöpft. Bitte spendieren Sie dem Entwickler einen Kaffee, um unbegrenzt Credits zu erhalten.",
            "waiting_for_completion": {
              "string": {
                "line1": "Bitte schließen Sie die Spende für %email% ab.",
                "line2": "Nachdem Sie die Zahlung abgeschlossen haben, aktualisieren Sie bitte diese Seite. Die Erweiterung aktualisiert Ihre Credits automatisch."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Kostenloses Aufladen",
            "confirm": "Kaufen ☕ Sie für den Entwickler"
          }
        }
      },
      "browser_notification": {
        "header": "Neuer Termin gefunden",
        "message": {
          "string": "Hallo. Die Erweiterung hat am %date% einen neuen Termin gefunden. Buchen Sie jetzt, bevor es weg ist!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Buch",
          "ignore": "Ignorieren"
        }
      },
      "settings": {
        "inactive": "Dieser Bereich wird angezeigt, sobald Sie die Erweiterung aktiviert und die Anmeldung abgeschlossen und alle Pop-up-Schritte abgeschlossen haben.",
        "credits": "Credits übrig.",
        "donate": "Kaufen ☕ Sie für den Entwickler 🙂",
        "unlimited": "Für jede Spende erhalten Sie unbegrenztes Guthaben.",
        "locale": "Sprache der Erweiterung",
        "info": "Die Einstellungen gelten für den folgenden Termin:",
        "account_email": {
          "is_dynamic": true,
          "string": "E-Mail-Adresse des Kontos: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "Konto-Durchwahl-ID: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "Termin-ID: <strong>%appointmentId%</strong>"
        },
        "support": "Für Unterstützung durch den Entwickler geben Sie bitte die Konto-Durchwahl-ID an und senden Sie eine E-Mail an guduriabhinay@gmail.com. Klicken Sie hier, um eine E-Mail zu <a id=\"send_email\" href=\"#\">senden Sie eine E-Mail</a>",
        "activate": "Aktivieren Sie das Skript",
        "autobook": "Termine automatisch buchen",
        "frequency": {
          "is_dynamic": true,
          "string": "Häufigkeit der Überprüfungen (alle %frequency% Minuten)"
        },
        "cities": "Stadt für das Interview",
        "startDate": "Startdatum",
        "endDate": "Enddatum",
        "reset": "Alles zurücksetzen",
        "faqs": "FAQs lesen",
        "updates": "Alle Updates anzeigen"
      }
    },
    "es":{
      "toasts": {
        "message": {
          "no_dates_found": "No se encontraron fechas. Podría haber un error o un límite interno excedido en el sistema. La próxima verificación se realizará en 30 minutos.",
          "checked_dates": {
            "string": "Verificado para fechas entre %start% y %end% @ %now%",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Su cita actual es en %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "Última disponibilidad: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Fecha anterior encontrada: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "No se han encontrado franjas horarias en la fecha: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "La próxima verificación será en: %date% en <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Confirmación del tipo de solicitud",
          "message": {
            "line1": "Por favor, seleccione si está solicitando la Visa de Inmigrante o la Visa de No Inmigrante para continuar.",
            "line2": "Además, esta extensión requiere que ya tenga una cita en una fecha futura. Si no tiene una cita, desinstale la extensión de inmediato."
          },
          "buttons": {
            "confirm": "Visa de no inmigrante",
            "deny": "Visa de Inmigrante"
          }
        },
        "en_lang": {
          "heading": "Confirmación de idioma",
          "message": {
            "line1": "Esta extensión está diseñada y optimizada para funcionar con la versión en inglés del sitio. Esto se debe a las diferentes formas en que se escribe una fecha del calendario en diferentes idiomas.",
            "line2": "Se recomienda encarecidamente cambiar a la versión en inglés."
          },
          "buttons": {
            "confirm": "Cambiar a inglés",
            "deny": "No cambies"
          }
        },
        "country_limit": {
          "heading": "Países admitidos",
          "message": {
            "line1": "Si no ve el país en esta página <em>(por ejemplo, India, Pakistán),</em> esta extensión no es para usted. El desarrollador no puede hacer nada al respecto. Arrepentido.",
            "line2": "Por favor, seleccione su país para continuar"
          },
          "buttons": {
            "confirm": "De acuerdo"
          }
        },
        "ext_usage": {
          "heading": "Directrices de uso de la extensión",
          "message": {
            "line1": "Esta extensión está diseñada para ser utilizada por personas que ya tienen una cita y buscan adelantar la fecha de su cita.",
            "line2": "Ha habido informes de que ciertas embajadas han limitado el número de veces que se puede reprogramar. Para minimizar esto, la extensión le permite buscar espacios dentro de un rango de fechas específico.",
            "line3": "Si ve un mensaje de este sitio web que le informa que solo puede reprogramar un cierto número de veces, se recomienda dejar de usar la extensión. El desarrollador no será responsable de ninguna lluvia radiactiva después de que veas esa advertencia."
          },
          "buttons": {
            "confirm": "Doy mi consentimiento para usar esta extensión dentro de sus límites"
          }
        },
        "update": {
          "heading": "Actualizaciones",
          "message": {
            "line1": "Esta versión de la extensión te permite cambiar tu ciudad sin tener que reiniciarla.",
            "line2": "Haga clic en el botón <b>Ver actualizaciones</b> para ver las actualizaciones de esta versión."
          },
          "buttons": {
            "confirm": "Saltarse",
            "cancel": "Ver Actualizaciones"
          }
        },
        "login": {
          "heading": "Ingresa tus credenciales",
          "message": "Proporcione el correo electrónico y la contraseña para su solicitud de visa. La extensión usará esto para iniciar sesión si no ha iniciado sesión. Todos los detalles confidenciales y protegidos.",
          "error": "Correo electrónico o contraseña no válidos",
          "label": {
            "email": "Su dirección de correo electrónico",
            "password": "Su contraseña"
          },
          "placeholder": {
            "email": "Ingresa tu dirección de correo electrónico",
            "password": "Ingresa tu contraseña"
          },
          "buttons": {
            "confirm": "Inicia sesión"
          },
          "footer": "La extensión aún no está activa. Por favor, complete el inicio de sesión."
        },
        "scheduling_limit": {
          "heading": "¡Espere! Lea este mensaje completo con atención!",
          "message": {
            "line1": "La extensión ha detectado que el sitio web ha limitado la cantidad de veces que puede reprogramar su cita. Si bien la extensión aún puede automatizar la reprogramación, corre el riesgo de perder los intentos restantes para las fechas que no desee.",
            "line2": "Si desea continuar con la automatización, el desarrollador le recomienda encarecidamente que desactive la opción de reserva automática para que pueda aprobar manualmente las nuevas reprogramaciones.",
            "line3": "Esta es la última advertencia del desarrollador."
          },
          "buttons": {
            "confirm": "Lo haré manualmente",
            "deny": "Automatizar"
          }
        },
        "appointments": {
          "heading": "Selecciona tu cita",
          "message": "Hay varias citas en su cuenta. Seleccione la cita para la que desea ejecutar el script.",
          "buttons": {
            "confirm": "Confirmar"
          },
          "footer": "La extensión aún no está activa. Por favor, seleccione la cita correcta."
        },
        "side_panel": {
          "heading": "La configuración se ha movido a una nueva área",
          "message": "Ahora puede hacer clic con el botón derecho en cualquier parte de la página y seleccionar \"USA Visa Auto Rescheduler\" para acceder a la configuración.",
          "buttons": {
            "confirm": "Abrir configuración ahora",
            "deny": "Lo comprobaré más tarde"
          }
        },
        "first_appointment": {
          "heading": "No puede utilizar esta extensión.",
          "message": "Esta extensión requiere que ya tenga una cita en una fecha futura. Si no tiene una cita, elimine la extensión de inmediato.",
          "buttons": {
            "confirm": "De acuerdo"
          }
        },
        "frequency": {
          "heading": "Frecuencia de los controles",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "La extensión comprobará las citas anteriores cada <strong>%minutes% minutos</strong>",
              "line2": "Cambie la configuración a continuación si desea cambiar la frecuencia. Puede utilizar el ratón o las flechas izquierda \"<\" y derecha \">\" para cambiar el valor."
            }
          },
          "buttons": {
            "confirm": "Confirmar"
          },
          "footer": "La extensión aún no está activa. Este es el último paso antes de que se active la extensión."
        },
        "init": {
          "heading": "¡Todo listo!",
          "asc_type": {
            "false": "en la primera fecha disponible",
            "true": "la cita más cercana a la VISA"
          },
          "activated": "La extensión ya está activada",
          "message": {
            "string": {
              "line1": "La extensión está activada para <strong>%email%</strong> y usará la fecha <strong>%date%</strong> para encontrar citas anteriores en %city%.",
              "line2": "La extensión programará la cita de ASC en <strong>%ascLocation%</strong> %ascType%.",
              "line3": "Si esto no es correcto, deje de usar la extensión y comuníquese con el desarrollador de inmediato. Este mensaje se cerrará automáticamente en %timer% segundos.",
              "line4": "Puede administrar las opciones de reserva automática y fecha de cita en el área de configuración."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "¡Atención, por favor!",
          "message": "No se detecta la fecha actual de su cita. Ingrese la fecha a continuación para continuar.",
          "err_message": "Introduzca la fecha correcta, por favor.",
          "buttons": {
            "confirm": "Confirmar"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "¡Atención, por favor!",
            "deactivated": "Extensión desactivada"
          },
          "message": {
            "warning": "La extensión está activa en otra pestaña. Cualquier cambio que realices en esta página afectará a la extensión. Si desea continuar realizando cambios en esta página, haga clic en el botón a continuación para desactivar la extensión.",
            "deactivated": "Puede volver a activar la extensión desde el área de configuración. En caso de que haya cerrado la pestaña activa anteriormente, la pestaña actual se convertirá en la pestaña activa."
          },
          "buttons": {
            "warning": {
              "confirm": "Desactivar"
            },
            "deactivated": {
              "confirm": "Entendido"
            }
          }
        },
        "locations": {
          "heading": "Por favor, seleccione",
          "message": {
            "consular": {
              "string": "La ubicación actual de la entrevista se establece en <strong>%city%.</strong> Para cambiar su ubicación, seleccione la ciudad en el cuadro a continuación y envíela.",
              "is_dynamic": true
            },
            "asc": {
              "string": "Su ubicación actual de ASC está establecida en <strong>%city%</strong>. Para cambiar su ubicación, seleccione la ciudad en el cuadro a continuación y envíela.",
              "is_dynamic": true
            },
            "asc_type": "¿Cuándo le gustaría programar su cita con ASC?"
          },
          "asc_input_options": {
            "false": "Primera fecha disponible",
            "true": "Más cercano a la cita para el visado"
          },
          "buttons": {
            "confirm": "Confirmar"
          },
          "footer": {
            "consular": "La extensión aún no está activa. Confirme la ubicación de su Cita Consular.",
            "asc": "La extensión aún no está activa. Confirme la ubicación de su cita con ASC."
          }
        },
        "error": {
          "heading": "¡Algo anda mal aquí!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "Deje de enviar spam a las solicitudes. La extensión está diseñada para recargar la página web por sí sola. Esta es su primera advertencia. Se agota el tiempo de espera para %seconds% segundos. Si se repite esto, se prohibirá permanentemente tu correo electrónico.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "Está utilizando una versión obsoleta %oldV% del complemento. Actualice a %newV% usando la tienda de extensiones de Chrome para continuar usándolo.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "Solo puede usar esta extensión para cuentas gratuitas %limit% cada 30 días desde esta IP <strong>[%ip%]</strong>. Puede comprar créditos para cuentas anteriores o ponerse en contacto con el desarrollador para otras opciones. Por favor, mencione esta IP en el correo electrónico.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "No puedes utilizar esta extensión para reprogramar en %city%.",
                  "line2": "%reason%",
                  "line3": "Si eres un usuario genuino, envía un correo electrónico al desarrollador para desbloquear."
                },
                "is_dynamic": true
              },
              "email_banned": "Su correo electrónico está prohibido en esta extensión por spam.",
              "ip_banned": "Tu IP está bloqueada permanentemente. Arena de libra.",
              "invalid_signature": "Está utilizando una extensión no válida. Descargue la extensión correcta de Chrome Web Store. Haga clic en <a href='' target='_blank'>aquí</a> para descargar la extensión correcta.",
              "no_email": "Vaya. La extensión no identificó su correo electrónico. Por favor, actualice la página. Si ve este error más de una vez, deje de usar el complemento de inmediato y envíe un correo electrónico al desarrollador.",
              "no_date": "Vaya. La extensión no identificó la fecha actual de su cita. Por favor, actualice la página. Si ves el mensaje por segunda vez, intenta cerrar sesión. Si aún ve este mensaje, deje de usar el complemento inmediatamente y envíe un correo electrónico al desarrollador.",
              "reset_count_reached": "Has alcanzado el límite de recargas de crédito gratuitas. Considere comprarle un café al desarrollador para obtener créditos ilimitados.",
              "already_paid": "Ya has pagado créditos ilimitados. ¿Todavía desea comprar más cafés al desarrollador?"
            },
            "browser": "Para evitar un bucle infinito, la extensión se apagará y cerrará la sesión ahora."
          },
          "buttons": {
            "confirm": "De acuerdo"
          }
        },
        "credits_exhausted": {
          "heading": "¡Te has quedado sin créditos!",
          "message": {
            "recharge": {
              "string": {
                "line1": "Sus créditos para la extensión se han agotado. Utilice las opciones a continuación para recargar.",
                "line2": "Tienes <strong>%resets% de recarga gratuita.</strong>",
                "line3": "Alternativamente, puedes comprarle un café al desarrollador para recibir créditos ilimitados."
              },
              "is_dynamic": true
            },
            "buy_coffee": "Sus créditos para la extensión se han agotado. Por favor, compre un café al desarrollador para recibir créditos ilimitados.",
            "waiting_for_completion": {
              "string": {
                "line1": "Por favor, complete la donación para %email%.",
                "line2": "Después de completar el pago, actualice esta página. La extensión actualizará automáticamente sus créditos."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Recarga gratuita",
            "confirm": "Comprar ☕ para el desarrollador"
          }
        }
      },
      "browser_notification": {
        "header": "Se ha encontrado una nueva cita",
        "message": {
          "string": "Hola. La extensión encontró una nueva cita en %date%. ¡Reserva ahora antes de que se agote!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Libro",
          "ignore": "Ignorar"
        }
      },
      "settings": {
        "inactive": "Esta área se mostrará una vez que active la extensión, complete el inicio de sesión y finalice todos los pasos emergentes.",
        "credits": "Créditos a la izquierda.",
        "donate": "Compre ☕ para el desarrollador 🙂",
        "unlimited": "Cualquier donación te dará créditos ilimitados.",
        "locale": "Lenguaje de extensión",
        "info": "Los ajustes son para la siguiente cita:",
        "account_email": {
          "is_dynamic": true,
          "string": "Correo electrónico de la cuenta: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "ID de extensión de cuenta: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "ID de cita: <strong>%appointmentId%</strong>"
        },
        "support": "Para cualquier soporte del desarrollador, proporcione el ID de extensión de la cuenta y envíe un correo electrónico a guduriabhinay@gmail.com. Haga clic aquí para <a id=\"send_email\" href=\"#\">enviar un correo electrónico</a>",
        "activate": "Activar el script",
        "autobook": "Reservar citas automáticamente",
        "frequency": {
          "is_dynamic": true,
          "string": "Frecuencia de las comprobaciones (cada %frequency% minutos)"
        },
        "cities": "Ciudad para la entrevista",
        "startDate": "Fecha de inicio",
        "endDate": "Fecha final",
        "reset": "Restablecer todo",
        "faqs": "Leer las preguntas frecuentes",
        "updates": "Ver todas las actualizaciones"
      }
    },
    "fa":{
      "rtl": true,
      "toasts": {
        "message": {
          "no_dates_found": "هیچ تاریخی یافت نشد. ممکن است خطایی رخ داده باشد یا محدودیت داخلی در سیستم تجاوز کرده باشد. بررسی بعدی پس از 30 دقیقه انجام خواهد شد.",
          "checked_dates": {
            "string": "برای تاریخ های بین %start% و %end% @ %now% بررسی شده است",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "قرار فعلی شما در %date% است",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "آخرین دسترسی: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "تاریخ قبلی یافت شد: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "هیچ بازه زمانی در تاریخ یافت نشد: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "بررسی بعدی در: %date% in <seconds></seconds> خواهد بود",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "تایید نوع برنامه",
          "message": {
            "line1": "لطفا انتخاب کنید که آیا برای ویزای مهاجرتی یا ویزای غیر مهاجرتی درخواست می دهید یا خیر.",
            "line2": "همچنین، این تمدید مستلزم آن است که شما از قبل در تاریخ آینده قرار ملاقات داشته باشید. اگر قرار ملاقات ندارید، لطفا فورا برنامه افزودنی را حذف نصب کنید."
          },
          "buttons": {
            "confirm": "ویزای غیر مهاجرتی",
            "deny": "ویزای مهاجرتی"
          }
        },
        "en_lang": {
          "heading": "تایید زبان",
          "message": {
            "line1": "این افزونه برای کار با نسخه انگلیسی سایت طراحی و بهینه شده است. این به دلیل روش های مختلف نوشتن تاریخ تقویم به زبان های مختلف است.",
            "line2": "به شدت توصیه می شود به نسخه انگلیسی بروید."
          },
          "buttons": {
            "confirm": "تغییر به انگلیسی",
            "deny": "تغییر ندهید"
          }
        },
        "country_limit": {
          "heading": "کشورهای پشتیبانی شده",
          "message": {
            "line1": "اگر کشور را در این صفحه <em>نمی بینید (به عنوان مثال: هند، پاکستان)،</em> این افزونه برای شما مناسب نیست. توسعه دهنده نمی تواند کاری در این مورد انجام دهد. متاسفم.",
            "line2": "لطفا کشور خود را برای ادامه انتخاب کنید"
          },
          "buttons": {
            "confirm": "باشه"
          }
        },
        "ext_usage": {
          "heading": "دستورالعمل های استفاده از برنامه افزودنی",
          "message": {
            "line1": "این برنامه افزودنی برای استفاده توسط افرادی طراحی شده است که قبلا قرار ملاقات دارند و به دنبال انتقال تاریخ قرار ملاقات خود هستند.",
            "line2": "گزارش هایی وجود دارد مبنی بر اینکه برخی از سفارتخانه ها تعداد دفعاتی را که می توانید برنامه ریزی مجدد کنید محدود کرده اند. برای به حداقل رساندن این موضوع، افزونه به شما امکان می دهد اسلات ها را در یک محدوده تاریخ خاص بررسی کنید.",
            "line3": "اگر پیامی از این وب سایت مشاهده کردید که به شما اطلاع می دهد فقط می توانید تعداد مشخصی از زمان بندی را تغییر دهید، توصیه می شود استفاده از افزونه را متوقف کنید. پس از مشاهده آن هشدار، توسعه دهنده مسئولیتی در قبال عواقب نخواهد داشت."
          },
          "buttons": {
            "confirm": "من موافقت می کنم که از این افزونه در محدوده آن استفاده کنم"
          }
        },
        "update": {
          "heading": "به روز رسانی ها",
          "message": {
            "line1": "این نسخه از برنامه افزودنی به شما امکان می دهد شهر خود را بدون نیاز به تنظیم مجدد تغییر دهید.",
            "line2": "برای مشاهده به روز رسانی های این نسخه، روی دکمه <b>به روز رسانی ها</b> کلیک کنید."
          },
          "buttons": {
            "confirm": "پرش",
            "cancel": "به روز رسانی ها"
          }
        },
        "login": {
          "heading": "اعتبار خود را وارد کنید",
          "message": "لطفا ایمیل و رمز عبور درخواست ویزای خود را ارائه دهید. اگر از سیستم خارج شده باشید، افزونه از این برای ورود استفاده می کند. تمام جزئیات محرمانه و محافظت شده است.",
          "error": "ایمیل یا رمز عبور نامعتبر",
          "label": {
            "email": "آدرس ایمیل شما",
            "password": "رمز عبور شما"
          },
          "placeholder": {
            "email": "آدرس ایمیل خود را وارد کنید",
            "password": "رمز عبور خود را وارد کنید"
          },
          "buttons": {
            "confirm": "ورود به سیستم"
          },
          "footer": "برنامه افزودنی هنوز فعال نیست. لطفا ورود به سیستم را تکمیل کنید."
        },
        "scheduling_limit": {
          "heading": "صبر کنید! کل این پیام را با دقت بخوانید!",
          "message": {
            "line1": "افزونه تشخیص داده است که وب‌سایت تعداد دفعاتی را که می‌توانید قرار ملاقات خود را از این به بعد تغییر دهید، محدود کرده است. در حالی که افزونه هنوز می‌تواند تغییر زمان را خودکار کند، شما در معرض خطر از دست دادن تلاش‌های تغییر زمان باقی‌مانده برای تاریخ‌هایی که نمی‌خواهید هستید.",
            "line2": "اگر می‌خواهید با خودکارسازی ادامه دهید، توسعه‌دهنده اکیداً توصیه می‌کند که تنظیمات رزرو خودکار را خاموش کنید تا بتوانید تغییر زمان جدید را به صورت دستی تأیید کنید.",
            "line3": "این آخرین هشدار از توسعه‌دهنده به شماست."
          },
          "buttons": {
            "confirm": "من این کار را به صورت دستی انجام خواهم داد",
            "deny": "خودکارسازی"
          }
        },
        "appointments": {
          "heading": "قرار ملاقات خود را انتخاب کنید",
          "message": "چندین قرار ملاقات در حسابتان وجود دارد. لطفا قرار ملاقاتی را که می خواهید اسکریپت را برای آن اجرا کنید انتخاب کنید.",
          "buttons": {
            "confirm": "تایید"
          },
          "footer": "برنامه افزودنی هنوز فعال نیست. لطفا قرار ملاقات صحیح را انتخاب کنید."
        },
        "side_panel": {
          "heading": "تنظیمات به منطقه جدیدی منتقل شده اند",
          "message": "اکنون می توانید در هر نقطه از صفحه کلیک راست کرده و تنظیمات \"USA Visa Auto Rescheduler\" را انتخاب کنید تا به تنظیمات دسترسی پیدا کنید.",
          "buttons": {
            "confirm": "اکنون تنظیمات را باز کنید",
            "deny": "بعدا آن را بررسی خواهم کرد"
          }
        },
        "first_appointment": {
          "heading": "نمی توانید از این افزونه استفاده کنید.",
          "message": "این تمدید مستلزم آن است که شما از قبل در تاریخ آینده قرار ملاقات داشته باشید. اگر قرار ملاقات ندارید، لطفا فورا تمدید را حذف کنید.",
          "buttons": {
            "confirm": "باشه"
          }
        },
        "frequency": {
          "heading": "دفعات بررسی ها",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "برنامه افزودنی قرار ملاقات های قبلی را هر <strong>%minutes% دقیقه</strong> بررسی می کند",
              "line2": "لطفا اگر می خواهید فرکانس را تغییر دهید، تنظیمات زیر را تغییر دهید. می توانید از ماوس یا فلش های چپ «<» و «>» راست برای تغییر مقدار استفاده کنید."
            }
          },
          "buttons": {
            "confirm": "تایید"
          },
          "footer": "برنامه افزودنی هنوز فعال نیست. این آخرین مرحله قبل از فعال شدن برنامه افزودنی است."
        },
        "init": {
          "heading": "همه چیز!",
          "asc_type": {
            "false": "در اولین تاریخ در دسترس",
            "true": "نزدیکترین به قرار ملاقات ویزا"
          },
          "activated": "برنامه افزودنی اکنون فعال شده است",
          "message": {
            "string": {
              "line1": "این افزونه برای <strong>%email%</strong> فعال می شود و از تاریخ <strong>%date%</strong> برای یافتن قرار ملاقات های قبلی در %city% استفاده می کند.",
              "line2": "برنامه افزودنی قرار ملاقات ASC را در <strong>%ascLocation%</strong> %ascType% برنامه ریزی می کند.",
              "line3": "اگر این مشکل درست نیست، لطفا استفاده از افزونه را متوقف کنید و فورا با توسعه دهنده تماس بگیرید. این پیام به طور خودکار در %timer% ثانیه بسته می شود.",
              "line4": "می توانید گزینه های رزرو خودکار و تاریخ تعیین را در قسمت تنظیمات مدیریت کنید."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "لطفا توجه کنید!",
          "message": "تاریخ قرار ملاقات فعلی شما شناسایی نمی شود. لطفا برای ادامه تاریخ زیر را وارد کنید.",
          "err_message": "لطفا تاریخ صحیح را وارد کنید.",
          "buttons": {
            "confirm": "تایید"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "لطفا توجه کنید!",
            "deactivated": "برنامه افزودنی غیرفعال شد"
          },
          "message": {
            "warning": "افزونه در برگه دیگری فعال است. هر تغییری که در این صفحه ایجاد کنید بر افزونه تأثیر می گذارد. اگر می خواهید به ایجاد تغییرات در این صفحه ادامه دهید، روی دکمه زیر کلیک کنید تا افزونه غیرفعال شود.",
            "deactivated": "می توانید برنامه افزودنی را دوباره از قسمت تنظیمات فعال کنید. در صورتی که برگه فعال قبلی را ببندید، برگه فعلی به برگه فعال تبدیل می شود."
          },
          "buttons": {
            "warning": {
              "confirm": "غیر فعال"
            },
            "deactivated": {
              "confirm": "درک"
            }
          }
        },
        "locations": {
          "heading": "لطفا انتخاب کنید",
          "message": {
            "consular": {
              "string": "مکان مصاحبه فعلی شما روی <strong>%city%</strong> تنظیم شده است. برای تغییر مکان، شهر را در کادر زیر انتخاب کرده و ارسال کنید.",
              "is_dynamic": true
            },
            "asc": {
              "string": "مکان ASC فعلی شما روی <strong>%city%</strong> تنظیم شده است. برای تغییر مکان، شهر را در کادر زیر انتخاب کرده و ارسال کنید.",
              "is_dynamic": true
            },
            "asc_type": "چه زمانی می خواهید قرار ملاقات ASC خود را برنامه ریزی کنید؟"
          },
          "asc_input_options": {
            "false": "اولین تاریخ در دسترس",
            "true": "نزدیکترین به قرار ملاقات ویزا"
          },
          "buttons": {
            "confirm": "تایید"
          },
          "footer": {
            "consular": "برنامه افزودنی هنوز فعال نیست. محل قرار ملاقات کنسولی خود را تأیید کنید.",
            "asc": "برنامه افزودنی هنوز فعال نیست. محل قرار ملاقات ASC خود را تأیید کنید."
          }
        },
        "error": {
          "heading": "اینجا مشکلی وجود دارد!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "ارسال هرزنامه به درخواست ها را متوقف کنید. این برنامه افزودنی برای بارگذاری مجدد صفحه وب به تنهایی طراحی شده است. این اولین هشدار شماست. مهلت زمانی شما برای %seconds% ثانیه تمام شده است. تکرار این امر منجر به ماندگاری ایمیل شما می شود.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "شما از نسخه قدیمی %oldV% افزونه استفاده می کنید. لطفا با استفاده از فروشگاه افزونه کروم به %newV% آن به روز کنید تا به استفاده از آن ادامه دهید.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "شما فقط می توانید از این افزونه برای حساب های %limit% رایگان هر 30 روز یکبار از این IP <strong>[%ip%]</strong> استفاده کنید. می توانید برای حساب های قبلی اعتبار خریداری کنید یا برای گزینه های دیگر با برنامه نویس تماس بگیرید. لطفا این IP را در ایمیل ذکر کنید.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "شما نمی توانید از این افزونه برای زمان بندی مجدد در %city% استفاده کنید.",
                  "line2": "%reason%",
                  "line3": "اگر کاربر واقعی هستید، لطفا برای باز کردن قفل به توسعه دهنده ایمیل بفرستید."
                },
                "is_dynamic": true
              },
              "email_banned": "ایمیل شما به دلیل ارسال هرزنامه از این افزونه مسدود شده است.",
              "ip_banned": "IP شما به صورت دائمی ممنوع است. شن و ماسه پوندی.",
              "invalid_signature": "از افزونه نامعتبر استفاده می کنید. لطفا افزونه صحیح را از نت بازار Chrome بارگیری کنید. کلیک کنید <a href='' target='_blank'>اینجا</a> برای دانلود پسوند صحیح.",
              "no_email": "اوه. افزونه ایمیل شما را شناسایی نکرد. لطفا صفحه را بازخوانی کنید. اگر بیش از یک بار این خطا را مشاهده کردید، لطفا فورا استفاده از افزونه را متوقف کنید و برای توسعه دهنده ایمیل ارسال کنید.",
              "no_date": "اوه. تمدید تاریخ قرار ملاقات فعلی شما را مشخص نکرده است. لطفا صفحه را بازخوانی کنید. اگر بار دوم پیام را می بینید، خروج از سیستم را امتحان کنید. اگر همچنان این پیام را می بینید، فورا استفاده از افزونه را متوقف کنید و برای توسعه دهنده ایمیل ارسال کنید.",
              "reset_count_reached": "شما به حد شارژ اعتبار رایگان رسیده اید. لطفا برای دریافت اعتبار نامحدود برای توسعه دهنده قهوه بخرید.",
              "already_paid": "شما قبلا برای اعتبارات نامحدود پرداخت کرده اید. آیا هنوز هم می خواهید قهوه بیشتری را به توسعه دهنده بخرید؟"
            },
            "browser": "برای جلوگیری از یک حلقه بی نهایت، افزونه خود را خاموش می کند و اکنون شما را از سیستم خارج می کند."
          },
          "buttons": {
            "confirm": "باشه"
          }
        },
        "credits_exhausted": {
          "heading": "اعتبار شما تمام شده است!",
          "message": {
            "recharge": {
              "string": {
                "line1": "اعتبارات شما برای تمدید به پایان رسیده است. لطفا از گزینه های زیر برای شارژ مجدد استفاده کنید.",
                "line2": "شما <strong>%reset% شارژ رایگان دارید.</strong>",
                "line3": "از طرف دیگر، می توانید برای توسعه دهنده یک قهوه بخرید تا اعتبارات نامحدود دریافت کنید."
              },
              "is_dynamic": true
            },
            "buy_coffee": "اعتبارات شما برای تمدید به پایان رسیده است. لطفا برای توسعه دهنده یک قهوه بخرید تا اعتبار نامحدود دریافت کنید.",
            "waiting_for_completion": {
              "string": {
                "line1": "لطفا کمک مالی را برای %email% تکمیل کنید.",
                "line2": "پس از تکمیل پرداخت، لطفا این صفحه را بازخوانی کنید. برنامه افزودنی به طور خودکار اعتبارات شما را به روز می کند."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "شارژ رایگان",
            "confirm": "برای توسعه دهنده خرید ☕ کنید"
          }
        }
      },
      "browser_notification": {
        "header": "قرار ملاقات جدید پیدا شد",
        "message": {
          "string": "سلام. این برنامه افزودنی یک قرار ملاقات جدید در %date% پیدا کرد. اکنون قبل از رفتن کتاب کنید!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "کتاب",
          "ignore": "چشم پوشی"
        }
      },
      "settings": {
        "inactive": "پس از فعال کردن افزونه و تکمیل ورود و اتمام مراحل پاپ آپ، این قسمت نمایش داده می شود.",
        "credits": "اعتبار باقی مانده است.",
        "donate": "برای توسعه دهنده 🙂 خرید ☕ کنید",
        "unlimited": "هر کمک مالی اعتبار نامحدودی برای شما به ارمغان می آورد.",
        "locale": "زبان برنامه افزودنی",
        "info": "تنظیمات برای قرار ملاقات زیر است:",
        "account_email": {
          "is_dynamic": true,
          "string": "ایمیل حساب: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "شناسه داخلی حساب:&nbsp;<strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "شناسه قرار ملاقات: <strong>%appointmentId%</strong>"
        },
        "support": "برای هرگونه پشتیبانی از توسعه دهنده، لطفا شناسه داخلی حساب را ارائه دهید و یک ایمیل به guduriabhinay@gmail.com ارسال کنید. اینجا را کلیک کنید <a id=\"send_email\" href=\"#\">ارسال ایمیل</a>",
        "activate": "اسکریپت را فعال کنید",
        "autobook": "رزرو خودکار قرار ملاقات ها",
        "frequency": {
          "is_dynamic": true,
          "string": "تعداد دفعات بررسی ها (هر %frequency%دقیقه)"
        },
        "cities": "شهر برای مصاحبه",
        "startDate": "تاریخ شروع",
        "endDate": "تاریخ پایان",
        "reset": "همه چیز را بازنشانی کنید",
        "faqs": "سوالات متداول را بخوانید",
        "updates": "مشاهده همه به روز رسانی ها"
      }
    },
    "fr":{
      "toasts": {
        "message": {
          "no_dates_found": "Aucune date trouvée. Il y a peut-être une erreur ou un dépassement de limite interne dans le système. La prochaine vérification aura lieu dans 30 minutes.",
          "checked_dates": {
            "string": "Vérification des dates entre %start% et %end% @ %now%",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Votre rendez-vous actuel est le %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "Dernière disponibilité : %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Date antérieure trouvée : %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "Aucun créneau horaire trouvé à date : %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "La prochaine vérification sera à : %date% dans <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Confirmation du type de demande",
          "message": {
            "line1": "Veuillez choisir si vous demandez le visa d’immigrant ou le visa de non-immigrant pour continuer.",
            "line2": "De plus, cette prolongation exige que vous ayez déjà un rendez-vous à une date ultérieure. Si vous n’avez pas de rendez-vous, veuillez désinstaller l’extension immédiatement."
          },
          "buttons": {
            "confirm": "Visa non-immigrant",
            "deny": "Visa d’immigrant"
          }
        },
        "en_lang": {
          "heading": "Confirmation de la langue",
          "message": {
            "line1": "Cette extension est conçue et optimisée pour fonctionner avec la version anglaise du site. Cela est dû aux différentes façons dont une date calendaire est écrite dans différentes langues.",
            "line2": "Il est fortement recommandé de passer à la version anglaise."
          },
          "buttons": {
            "confirm": "Passer à l’anglais",
            "deny": "Ne changez pas"
          }
        },
        "country_limit": {
          "heading": "Pays pris en charge",
          "message": {
            "line1": "Si vous ne voyez pas le pays sur cette page <em>(ex : Inde, Pakistan),</em> cette extension n’est pas pour vous. Le développeur ne peut rien y faire. Pardon.",
            "line2": "Veuillez sélectionner votre pays pour continuer"
          },
          "buttons": {
            "confirm": "D’accord"
          }
        },
        "ext_usage": {
          "heading": "Directives d’utilisation des extensions",
          "message": {
            "line1": "Cette prolongation est conçue pour être utilisée par les personnes qui ont déjà un rendez-vous et qui cherchent à devancer la date de leur rendez-vous.",
            "line2": "Il a été signalé que certaines ambassades ont limité le nombre de fois où vous pouvez reporter. Pour minimiser cela, l’extension vous permet de vérifier les créneaux dans une plage de dates spécifique.",
            "line3": "Si vous voyez un message de ce site Web vous informant que vous ne pouvez reprogrammer qu’un certain nombre de fois, il est recommandé d’arrêter d’utiliser l’extension. Le développeur ne sera pas responsable des retombées après que vous ayez vu cet avertissement."
          },
          "buttons": {
            "confirm": "Je consens à utiliser cette extension dans ses limites"
          }
        },
        "update": {
          "heading": "Mises à jour",
          "message": {
            "line1": "Cette version de l’extension vous permet de changer de ville sans avoir à réinitialiser.",
            "line2": "Cliquez sur le bouton <b>Voir les mises à jour</b> pour voir les mises à jour de cette version."
          },
          "buttons": {
            "confirm": "Sautiller",
            "cancel": "Voir les mises à jour"
          }
        },
        "login": {
          "heading": "Entrez vos informations d’identification",
          "message": "Veuillez fournir l’adresse e-mail et le mot de passe de votre demande de visa. L’extension l’utilisera pour se connecter si vous êtes déconnecté. Tous les détails sont confidentiels et protégés.",
          "error": "E-mail ou mot de passe non valide",
          "label": {
            "email": "Votre adresse e-mail",
            "password": "Votre mot de passe"
          },
          "placeholder": {
            "email": "Entrez votre adresse e-mail",
            "password": "Entrez votre mot de passe"
          },
          "buttons": {
            "confirm": "S'identifier"
          },
          "footer": "L’extension n’est pas encore active. Veuillez terminer la connexion."
        },
        "scheduling_limit": {
          "heading": "Attendez ! Lisez attentivement ce message en entier !",
          "message": {
            "line1": "L'extension a détecté que le site web a limité le nombre de reports de rendez-vous. Bien que l'extension puisse toujours automatiser les reports, vous risquez de perdre vos tentatives restantes pour les dates que vous ne souhaitez pas.",
            "line2": "Si vous souhaitez continuer avec l'automatisation, le développeur vous recommande fortement de désactiver la réservation automatique afin de pouvoir approuver manuellement les nouveaux reports.",
            "line3": "Ceci est votre dernier avertissement du développeur."
          },
          "buttons": {
            "confirm": "Je le ferai manuellement",
            "deny": "Automatiser"
          }
        },
        "appointments": {
          "heading": "Sélectionnez votre rendez-vous",
          "message": "Il y a plusieurs rendez-vous dans votre compte. Veuillez sélectionner le rendez-vous pour lequel vous souhaitez exécuter le script.",
          "buttons": {
            "confirm": "Confirmer"
          },
          "footer": "L’extension n’est pas encore active. Veuillez sélectionner le bon rendez-vous."
        },
        "side_panel": {
          "heading": "Les paramètres ont été déplacés vers une nouvelle zone",
          "message": "Vous pouvez maintenant cliquer avec le bouton droit n’importe où sur la page et sélectionner <b>USA Visa Auto Rescheduler</b> pour accéder aux paramètres.",
          "buttons": {
            "confirm": "Ouvrez les paramètres maintenant",
            "deny": "Je vérifierai plus tard"
          }
        },
        "first_appointment": {
          "heading": "Vous ne pouvez pas utiliser cette extension.",
          "message": "Cette prolongation nécessite que vous ayez déjà un rendez-vous à une date ultérieure. Si vous n’avez pas de rendez-vous, veuillez supprimer l’extension immédiatement.",
          "buttons": {
            "confirm": "D’ACCORD"
          }
        },
        "frequency": {
          "heading": "Fréquence des contrôles",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "L’extension vérifiera les rendez-vous antérieurs toutes les <strong>%minutes% minutes</strong>",
              "line2": "Veuillez modifier les paramètres ci-dessous si vous souhaitez modifier la fréquence. Vous pouvez utiliser votre souris ou les flèches gauche < » et droite « > » pour modifier la valeur."
            }
          },
          "buttons": {
            "confirm": "Confirmer"
          },
          "footer": "L’extension n’est pas encore active. Il s’agit de la dernière étape avant l’activation de l’extension."
        },
        "init": {
          "heading": "Paré!",
          "asc_type": {
            "false": "à la première date disponible",
            "true": "le plus proche du rendez-vous VISA"
          },
          "activated": "L’extension est maintenant activée",
          "message": {
            "string": {
              "line1": "L’extension est activée pour <strong>%email%</strong> et utilisera la date <strong>%date%</strong> pour trouver des rendez-vous antérieurs dans %city%.",
              "line2": "L’extension planifiera le rendez-vous ASC dans <strong>%ascLocation%</strong> %ascType%.",
              "line3": "Si ce n’est pas le cas, arrêtez d’utiliser l’extension et contactez immédiatement le développeur. Ce message se fermera automatiquement dans %timer% secondes.",
              "line4": "Vous pouvez gérer les options de réservation automatique et de date de rendez-vous dans la zone des paramètres."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "Attention s’il vous plaît !",
          "message": "La date de votre rendez-vous actuel n’est pas détectée. Veuillez entrer la date ci-dessous pour continuer.",
          "err_message": "Entrez la bonne date s’il vous plaît.",
          "buttons": {
            "confirm": "Confirmer"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "Attention s’il vous plaît !",
            "deactivated": "Extension désactivée"
          },
          "message": {
            "warning": "L’extension est active sur un autre onglet. Toute modification que vous apportez sur cette page aura un impact sur l’extension. Si vous souhaitez continuer à apporter des modifications à cette page, cliquez sur le bouton ci-dessous pour désactiver l’extension.",
            "deactivated": "Vous pouvez réactiver l’extension à partir de la zone des paramètres. Si vous avez fermé l’onglet précédemment actif, l’onglet actuel deviendra l’onglet actif."
          },
          "buttons": {
            "warning": {
              "confirm": "Désactiver"
            },
            "deactivated": {
              "confirm": "Compris"
            }
          }
        },
        "locations": {
          "heading": "Veuillez sélectionner",
          "message": {
            "consular": {
              "string": "Le lieu actuel de votre entretien est défini sur <strong>%city%.</strong> Pour changer votre emplacement, sélectionnez la ville dans la case ci-dessous et soumettez-la.",
              "is_dynamic": true
            },
            "asc": {
              "string": "Votre emplacement ASC actuel est défini sur <strong>%city%</strong>. Pour changer votre emplacement, sélectionnez la ville dans la case ci-dessous et soumettez-la.",
              "is_dynamic": true
            },
            "asc_type": "Quand souhaitez-vous prendre rendez-vous avec ASC ?"
          },
          "asc_input_options": {
            "false": "Première date disponible",
            "true": "Le plus proche du rendez-vous VISA"
          },
          "buttons": {
            "confirm": "Confirmer"
          },
          "footer": {
            "consular": "L’extension n’est pas encore active. Confirmez le lieu de votre rendez-vous consulaire.",
            "asc": "L’extension n’est pas encore active. Confirmez l’endroit de votre rendez-vous avec ASC."
          }
        },
        "error": {
          "heading": "Quelque chose ne va pas ici !",
          "message": {
            "server": {
              "stop_spam": {
                "string": "Arrêtez de spammer les demandes. L’extension est conçue pour recharger la page Web par elle-même. C’est votre premier avertissement. Le délai d’expiration est de %seconds% secondes. Une répétition de cela entraînera le bannissement permanent de votre e-mail.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "Vous utilisez une version obsolète %oldV% du plugin. Veuillez mettre à jour vers %newV% à l’aide du magasin d’extensions Chrome pour continuer à l’utiliser.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "Vous ne pouvez utiliser cette extension que pour les comptes gratuits %limit% tous les 30 jours à partir de cette adresse IP <strong>[%ip%].</strong> Vous pouvez soit acheter des crédits pour des comptes précédents, soit contacter le développeur pour d’autres options. Veuillez mentionner cette adresse IP dans l’e-mail.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "Vous ne pouvez pas utiliser cette extension pour la reprogrammation dans %city%.",
                  "line2": "%reason%",
                  "line3": "Si vous êtes un utilisateur authentique, veuillez envoyer un e-mail au développeur pour le déverrouillage."
                },
                "is_dynamic": true
              },
              "email_banned": "Votre adresse e-mail est bannie de cette extension pour spamming.",
              "ip_banned": "Votre IP est bannie de manière permanente. Piler du sable.",
              "invalid_signature": "Vous utilisez une extension non valide. Veuillez télécharger l’extension correcte depuis le Chrome Web Store. Cliquez sur <a href='' target='_blank'>ici pour télécharger l’extension</a> correcte.",
              "no_email": "Oups. L’extension n’a pas identifié votre adresse e-mail. Veuillez actualiser la page. Si vous voyez cette erreur plus d’une fois, veuillez cesser immédiatement d’utiliser le plugin et envoyer un e-mail au développeur.",
              "no_date": "Oups. La prolongation n’indiquait pas la date de votre nomination actuelle. Veuillez actualiser la page. Si vous voyez le message la deuxième fois, essayez de vous déconnecter. Si ce message s’affiche toujours, arrêtez immédiatement d’utiliser le plug-in et envoyez un e-mail au développeur.",
              "reset_count_reached": "Vous avez atteint la limite des recharges de crédit gratuites. Veuillez envisager d’acheter un café au développeur pour obtenir des crédits illimités.",
              "already_paid": "Vous avez déjà payé pour des crédits illimités. Souhaitez-vous toujours acheter plus de cafés au développeur ?"
            },
            "browser": "Pour éviter une boucle infinie, l’extension se désactivera d’elle-même et vous déconnectera maintenant."
          },
          "buttons": {
            "confirm": "D’ACCORD"
          }
        },
        "credits_exhausted": {
          "heading": "Vous n’avez plus de crédits !",
          "message": {
            "recharge": {
              "string": {
                "line1": "Vos crédits pour la prolongation sont épuisés. Veuillez utiliser les options ci-dessous pour recharger.",
                "line2": "Vous avez <strong>%resets% recharge gratuite.</strong>",
                "line3": "Alternativement, vous pouvez acheter un café au développeur pour recevoir des crédits illimités."
              },
              "is_dynamic": true
            },
            "buy_coffee": "Vos crédits pour la prolongation sont épuisés. Veuillez offrir un café au développeur pour recevoir des crédits illimités.",
            "waiting_for_completion": {
              "string": {
                "line1": "Veuillez compléter le don pour %email%.",
                "line2": "Après avoir effectué le paiement, veuillez actualiser cette page. L'extension mettra automatiquement à jour vos crédits."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Recharge gratuite",
            "confirm": "Acheter ☕ pour le développeur"
          }
        }
      },
      "browser_notification": {
        "header": "Nouvelle nomination trouvée",
        "message": {
          "string": "Salut. L’extension a trouvé une nouvelle nomination le %date%. Réservez maintenant avant qu’il n’y en ait plus !",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Livre",
          "ignore": "Ignorer"
        }
      },
      "settings": {
        "inactive": "Cette zone s’affichera une fois que vous aurez activé l’extension, terminé la connexion et terminé toutes les étapes de la fenêtre contextuelle.",
        "credits": "Crédits restants.",
        "donate": "Achetez ☕ pour le développeur 🙂",
        "unlimited": "Tout don vous rapportera des crédits illimités.",
        "locale": "Langage d’extension",
        "info": "Les paramètres sont pour le rendez-vous ci-dessous :",
        "account_email": {
          "is_dynamic": true,
          "string": "E-mail du compte : <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "ID du compte : <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "ID de rendez-vous : <strong>%appointmentId%</strong>"
        },
        "support": "Pour toute assistance de la part du développeur, veuillez fournir l'ID d'extension du compte et envoyer un e-mail à guduriabhinay@gmail.com. Cliquez ici pour <a id=\"send_email\" href=\"#\">envoyer un e-mail</a>",
        "activate": "Activer le script",
        "autobook": "Réservation automatique de rendez-vous",
        "frequency": {
          "is_dynamic": true,
          "string": "Fréquence des contrôles (toutes les %frequency% minutes)"
        },
        "cities": "Ville pour l’interview",
        "startDate": "Date de début",
        "endDate": "Date de fin",
        "reset": "Tout réinitialiser",
        "faqs": "Lire la FAQ",
        "updates": "Voir toutes les mises à jour"
      }
    },
    "it":{
      "toasts": {
        "message": {
          "no_dates_found": "Nessuna data trovata. Potrebbe esserci un errore o un superamento del limite interno nel sistema. Il prossimo controllo avverrà dopo 30 minuti.",
          "checked_dates": {
            "string": "Verificate le date comprese tra %start% e %end% @ %now%",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Il tuo appuntamento attuale è il %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "Ultima disponibilità: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Data precedente trovata: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "Nessuna fascia oraria trovata in data: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "Il prossimo controllo sarà alle: %date% in <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Conferma del tipo di applicazione",
          "message": {
            "line1": "Si prega di selezionare se si richiede il visto di immigrazione o il visto di non immigrazione per procedere.",
            "line2": "Inoltre, questa estensione richiede che tu abbia già un appuntamento in una data futura. Se non hai un appuntamento, disinstalla immediatamente l'estensione."
          },
          "buttons": {
            "confirm": "Visto per non immigrati",
            "deny": "Immigrazione"
          }
        },
        "en_lang": {
          "heading": "Conferma della lingua",
          "message": {
            "line1": "Questa estensione è progettata e ottimizzata per funzionare con la versione inglese del sito. Ciò è dovuto ai diversi modi in cui una data del calendario viene scritta in lingue diverse.",
            "line2": "Si consiglia vivamente di passare alla versione inglese."
          },
          "buttons": {
            "confirm": "Passa all'inglese",
            "deny": "Non cambiare"
          }
        },
        "country_limit": {
          "heading": "Paesi supportati",
          "message": {
            "line1": "Se non vedi il paese in questa pagina <em>(es: India, Pakistan),</em> questa estensione non fa per te. Lo sviluppatore non può fare nulla al riguardo. Scusa.",
            "line2": "Seleziona il tuo paese per procedere"
          },
          "buttons": {
            "confirm": "Ok"
          }
        },
        "ext_usage": {
          "heading": "Linee guida per l'utilizzo delle estensioni",
          "message": {
            "line1": "Questa estensione è progettata per essere utilizzata da persone che hanno già un appuntamento e stanno cercando di spostare in anticipo la data dell'appuntamento.",
            "line2": "Ci sono state segnalazioni secondo cui alcune ambasciate hanno limitato il numero di volte in cui è possibile riprogrammare. Per ridurre al minimo questo problema, l'estensione consente di verificare la presenza di slot all'interno di un intervallo di date specifico.",
            "line3": "Se vedi un messaggio da questo sito Web che ti informa che puoi riprogrammare solo un certo numero di volte, ti consigliamo di interrompere l'utilizzo dell'estensione. Lo sviluppatore non sarà responsabile per eventuali ricadute dopo la visualizzazione di tale avviso."
          },
          "buttons": {
            "confirm": "Acconsento all'utilizzo di questa estensione nei suoi limiti"
          }
        },
        "update": {
          "heading": "Aggiornamenti",
          "message": {
            "line1": "Questa versione dell'estensione ti consente di cambiare la tua città senza dover ripristinare.",
            "line2": "Fare clic sul pulsante <b>Visualizza aggiornamenti</b> per visualizzare gli aggiornamenti di questa versione."
          },
          "buttons": {
            "confirm": "Saltare",
            "cancel": "Vedi gli aggiornamenti"
          }
        },
        "login": {
          "heading": "Inserisci le tue credenziali",
          "message": "Si prega di fornire l'e-mail e la password per la domanda di visto. L'estensione lo utilizzerà per accedere se sei disconnesso. Tutti i dettagli sono riservati e protetti.",
          "error": "E-mail o password non valide",
          "label": {
            "email": "Il tuo indirizzo email",
            "password": "La tua password"
          },
          "placeholder": {
            "email": "Inserisci il tuo indirizzo email",
            "password": "Inserisci la tua password"
          },
          "buttons": {
            "confirm": "Accedi"
          },
          "footer": "L'estensione non è ancora attiva. Si prega di completare il login."
        },
        "scheduling_limit": {
          "heading": "Aspetta! Leggi attentamente l'intero messaggio!",
          "message": {
            "line1": "L'estensione ha rilevato che il sito web ha limitato il numero di volte in cui puoi riprogrammare il tuo appuntamento in futuro. Sebbene l'estensione possa ancora automatizzare la riprogrammazione, rischierai di perdere i tentativi di riprogrammazione rimanenti per le date che non desideri.",
            "line2": "Se desideri procedere con l'automazione, lo sviluppatore ti consiglia vivamente di disattivare l'impostazione di prenotazione automatica in modo da poter approvare manualmente la nuova riprogrammazione.",
            "line3": "Questo è l'ultimo avviso da parte dello sviluppatore."
          },
          "buttons": {
            "confirm": "Lo farò manualmente",
            "deny": "Automatizza"
          }
        },
        "appointments": {
          "heading": "Seleziona il tuo appuntamento",
          "message": "Ci sono più appuntamenti nel tuo account. Seleziona l'appuntamento per il quale desideri eseguire lo script.",
          "buttons": {
            "confirm": "Confermare"
          },
          "footer": "L'estensione non è ancora attiva. Si prega di selezionare l'appuntamento corretto."
        },
        "side_panel": {
          "heading": "Le impostazioni sono state spostate in una nuova area",
          "message": "Ora puoi fare clic con il pulsante destro del mouse in un punto qualsiasi della pagina e selezionare <b>USA Visa Auto Rescheduler</b> per accedere alle impostazioni.",
          "buttons": {
            "confirm": "Apri le impostazioni ora",
            "deny": "Lo controllerò più tardi"
          }
        },
        "first_appointment": {
          "heading": "Non è possibile utilizzare questa estensione.",
          "message": "Questa estensione richiede che tu abbia già un appuntamento in una data futura. Se non hai un appuntamento, rimuovi immediatamente la prolunga.",
          "buttons": {
            "confirm": "OK"
          }
        },
        "frequency": {
          "heading": "Frequenza dei controlli",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "L'interno verificherà la presenza di appuntamenti precedenti ogni <strong>%minutes% minuti</strong>",
              "line2": "Si prega di modificare le impostazioni di seguito se si desidera modificare la frequenza. È possibile utilizzare il mouse o le frecce sinistra \"<\" e destra \">\" per modificare il valore."
            }
          },
          "buttons": {
            "confirm": "Confermare"
          },
          "footer": "L'estensione non è ancora attiva. Questo è l'ultimo passaggio prima dell'attivazione dell'estensione."
        },
        "init": {
          "heading": "Tutto pronto!",
          "asc_type": {
            "false": "alla prima data disponibile",
            "true": "più vicino all'appuntamento per il visto"
          },
          "activated": "L'estensione è ora attivata",
          "message": {
            "string": {
              "line1": "L'estensione è attivata per <strong>%email%</strong> e utilizzerà la data <strong>%date%</strong> per trovare gli appuntamenti precedenti in %city%.",
              "line2": "L'estensione pianificherà l'appuntamento ASC in <strong>%ascLocation%</strong> %ascType%.",
              "line3": "Se questo non è corretto, interrompi l'utilizzo dell'estensione e contatta immediatamente lo sviluppatore. Questo messaggio si chiuderà automaticamente in %timer% secondi.",
              "line4": "È possibile gestire le opzioni di prenotazione automatica e data di appuntamento nell'area delle impostazioni."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "Attenzione per favore!",
          "message": "La data dell'appuntamento corrente non viene rilevata. Inserisci la data sottostante per procedere.",
          "err_message": "Inserisci la data corretta per favore.",
          "buttons": {
            "confirm": "Confermare"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "Attenzione per favore!",
            "deactivated": "Estensione disattivata"
          },
          "message": {
            "warning": "L'estensione è attiva in un'altra scheda. Qualsiasi modifica apportata in questa pagina avrà un impatto sull'estensione. Se desideri procedere apportando modifiche a questa pagina, fai clic sul pulsante sottostante per disattivare l'estensione.",
            "deactivated": "È possibile attivare nuovamente l'estensione dall'area delle impostazioni. Nel caso in cui tu abbia chiuso la scheda precedentemente attiva, la scheda corrente diventerà la scheda attiva."
          },
          "buttons": {
            "warning": {
              "confirm": "Disattivare"
            },
            "deactivated": {
              "confirm": "Capito"
            }
          }
        },
        "locations": {
          "heading": "Si prega di selezionare",
          "message": {
            "consular": {
              "string": "Il luogo attuale del colloquio è impostato su <strong>%city%.</strong> Per modificare la tua posizione, seleziona la città nella casella sottostante e invia.",
              "is_dynamic": true
            },
            "asc": {
              "string": "La posizione ASC corrente è impostata su <strong>%city%</strong>. Per modificare la tua posizione, seleziona la città nella casella sottostante e invia.",
              "is_dynamic": true
            },
            "asc_type": "Quando desidera fissare il suo appuntamento ASC?"
          },
          "asc_input_options": {
            "false": "Prima data disponibile",
            "true": "Il più vicino all'appuntamento per il visto"
          },
          "buttons": {
            "confirm": "Confermare"
          },
          "footer": {
            "consular": "L'estensione non è ancora attiva. Conferma il luogo del tuo appuntamento consolare.",
            "asc": "L'estensione non è ancora attiva. Conferma la posizione del tuo appuntamento ASC."
          }
        },
        "error": {
          "heading": "C'è qualcosa che non va!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "Smetti di inviare spam alle richieste. L'estensione è progettata per ricaricare la pagina Web da sola. Questo è il tuo primo avvertimento. Si è scaduti per %seconds% secondi. Una ripetizione di questo comporterà il permaban della tua email.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "Stai utilizzando una versione obsoleta %oldV% del plugin. Si prega di aggiornare a %newV% it utilizzando l'archivio delle estensioni di Chrome per continuare a utilizzarlo.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "Puoi utilizzare questa estensione solo per %limit% account gratuiti ogni 30 giorni da questo IP <strong>[%ip%]</strong>. Puoi acquistare crediti per gli account precedenti o contattare lo sviluppatore per altre opzioni. Si prega di menzionare questo IP nell'e-mail.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "Non è possibile utilizzare questa estensione per la riprogrammazione in %city%.",
                  "line2": "%reason%",
                  "line3": "Se sei un utente autentico, invia un'e-mail allo sviluppatore per lo sblocco."
                },
                "is_dynamic": true
              },
              "email_banned": "La tua email è stata bandita da questa estensione per spamming.",
              "ip_banned": "Il tuo IP è permanentemente bannato. Sabbia libbra.",
              "invalid_signature": "Si sta utilizzando un'estensione non valida. Scarica l'estensione corretta dal Chrome Web Store. Fai clic su <a href='' target='_blank'>qui</a> per scaricare l'estensione corretta.",
              "no_email": "Oops. L'estensione non ha identificato la tua email. Si prega di aggiornare la pagina. Se visualizzi questo errore per più di una volta, smetti immediatamente di usare il plug-in e invia un'e-mail allo sviluppatore.",
              "no_date": "Oops. L'estensione non identificava la data dell'appuntamento corrente. Si prega di aggiornare la pagina. Se viene visualizzato il messaggio per la seconda volta, provare a disconnettersi. Se continui a visualizzare questo messaggio, interrompi immediatamente l'utilizzo del plug-in e invia un'e-mail allo sviluppatore.",
              "reset_count_reached": "Hai raggiunto il limite di ricariche di credito gratuite. Prendi in considerazione l'idea di acquistare un caffè allo sviluppatore per ottenere crediti illimitati.",
              "already_paid": "Hai già pagato per crediti illimitati. Desideri ancora acquistare più caffè allo sviluppatore?"
            },
            "browser": "Per evitare un ciclo infinito, l'estensione si spegnerà e disconnetterà l'utente ora."
          },
          "buttons": {
            "confirm": "OK"
          }
        },
        "credits_exhausted": {
          "heading": "Hai finito i crediti!",
          "message": {
            "recharge": {
              "string": {
                "line1": "I tuoi crediti per l'estensione sono esauriti. Si prega di utilizzare le opzioni seguenti per ricaricare.",
                "line2": "Hai <strong>%resets% ricarica gratuita.</strong>",
                "line3": "In alternativa puoi comprare un caffè allo sviluppatore per ricevere crediti illimitati."
              },
              "is_dynamic": true
            },
            "buy_coffee": "I tuoi crediti per l'estensione sono esauriti. Si prega di offrire un caffè allo sviluppatore per ricevere crediti illimitati.",
            "waiting_for_completion": {
              "string": {
                "line1": "Si prega di completare la donazione per %email%.",
                "line2": "Dopo aver completato il pagamento, aggiorna questa pagina. L'estensione aggiornerà automaticamente i tuoi crediti."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Ricarica gratuita",
            "confirm": "Acquista ☕ per lo sviluppatore"
          }
        }
      },
      "browser_notification": {
        "header": "Nuovo appuntamento trovato",
        "message": {
          "string": "Ehilà. L'estensione ha trovato un nuovo appuntamento in %date%. Prenota ora prima che finisca!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Libro",
          "ignore": "Ignorare"
        }
      },
      "settings": {
        "inactive": "Quest'area verrà visualizzata una volta attivata l'estensione, completato l'accesso e terminati tutti i passaggi pop-up.",
        "credits": "Crediti rimasti.",
        "donate": "Acquista ☕ per lo sviluppatore 🙂",
        "unlimited": "Qualsiasi donazione ti farà ottenere crediti illimitati.",
        "locale": "Lingua dell'estensione",
        "info": "Le impostazioni sono per il seguente appuntamento:",
        "account_email": {
          "is_dynamic": true,
          "string": "E-mail dell'account: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "ID esterno account: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "ID appuntamento: <strong>%appointmentId%</strong>"
        },
        "support": "Per qualsiasi supporto da parte dello sviluppatore, fornisci l'ID esterno dell'account e invia un'e-mail a guduriabhinay@gmail.com. Clicca qui per <a id=\"send_email\" href=\"#\">invia un'email</a>",
        "activate": "Attiva lo script",
        "autobook": "Prenotazione automatica degli appuntamenti",
        "frequency": {
          "is_dynamic": true,
          "string": "Frequenza dei controlli (ogni %frequency% minuti)"
        },
        "cities": "Città per l'intervista",
        "startDate": "Data di inizio",
        "endDate": "Data di fine",
        "reset": "Ripristina tutto",
        "faqs": "Leggi le domande frequenti",
        "updates": "Vedi tutti gli aggiornamenti"
      }
    },
    "pa":{
      "toasts": {
        "message": {
          "no_dates_found": "ਕੋਈ ਤਾਰੀਖਾਂ ਨਹੀਂ ਮਿਲੀਆਂ। ਸਿਸਟਮ ਵਿੱਚ ਕੋਈ ਗਲਤੀ ਹੋ ਸਕਦੀ ਹੈ ਜਾਂ ਅੰਦਰੂਨੀ ਸੀਮਾ ਵੱਧ ਗਈ ਹੋ ਸਕਦੀ ਹੈ। ਅਗਲੀ ਜਾਂਚ 30 ਮਿੰਟਾਂ ਬਾਅਦ ਹੋਵੇਗੀ।",
          "checked_dates": {
            "string": "%start% ਅਤੇ %end% @ %now% ਦੇ ਵਿਚਕਾਰ ਤਾਰੀਖਾਂ ਦੀ ਜਾਂਚ ਕੀਤੀ ਗਈ",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "ਤੁਹਾਡੀ ਵਰਤਮਾਨ ਮੁਲਾਕਾਤ %date% 'ਤੇ ਹੈ",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "ਨਵੀਨਤਮ ਉਪਲਬਧਤਾ: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "ਪਹਿਲਾਂ ਦੀ ਮਿਤੀ ਮਿਲੀ: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "ਮਿਤੀ 'ਤੇ ਕੋਈ ਟਾਈਮ ਸਲਾਟ ਨਹੀਂ ਲੱਭੇ: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "ਅਗਲਾ ਚੈੱਕ ਇਸ 'ਤੇ ਹੋਵੇਗਾ: %date% in <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "ਐਪਲੀਕੇਸ਼ਨ ਕਿਸਮ ਦੀ ਪੁਸ਼ਟੀ",
          "message": {
            "line1": "ਕਿਰਪਾ ਕਰਕੇ ਚੁਣੋ ਕਿ ਕੀ ਤੁਸੀਂ ਅੱਗੇ ਵਧਣ ਲਈ ਇਮੀਗ੍ਰੈਂਟ ਵੀਜ਼ਾ ਜਾਂ ਗੈਰ-ਪ੍ਰਵਾਸੀ ਵੀਜ਼ਾ ਵਾਸਤੇ ਅਰਜ਼ੀ ਦਿੰਦੇ ਹੋ।",
            "line2": "ਨਾਲ ਹੀ, ਇਸ ਐਕਸਟੈਂਸ਼ਨ ਲਈ ਤੁਹਾਨੂੰ ਭਵਿੱਖ ਦੀ ਮਿਤੀ ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਮਿਲਣ ਦਾ ਸਮਾਂ ਲੈਣ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਮੁਲਾਕਾਤ ਨਹੀਂ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਤੁਰੰਤ ਅਣਇੰਸਟਾਲ ਕਰੋ।"
          },
          "buttons": {
            "confirm": "ਗੈਰ-ਪ੍ਰਵਾਸੀ ਵੀਜ਼ਾ",
            "deny": "ਪ੍ਰਵਾਸੀ ਵੀਜ਼ਾ"
          }
        },
        "en_lang": {
          "heading": "ਭਾਸ਼ਾ ਪੁਸ਼ਟੀਕਰਨ",
          "message": {
            "line1": "ਇਹ ਐਕਸਟੈਂਸ਼ਨ ਸਾਈਟ ਦੇ ਅੰਗਰੇਜ਼ੀ ਸੰਸਕਰਣ ਨਾਲ ਕੰਮ ਕਰਨ ਲਈ ਡਿਜ਼ਾਈਨ ਅਤੇ ਅਨੁਕੂਲ ਬਣਾਇਆ ਗਿਆ ਹੈ. ਇਹ ਵੱਖ-ਵੱਖ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਕੈਲੰਡਰ ਤਾਰੀਖ ਲਿਖਣ ਦੇ ਵੱਖ-ਵੱਖ ਤਰੀਕਿਆਂ ਕਰਕੇ ਹੈ।",
            "line2": "ਅੰਗਰੇਜ਼ੀ ਸੰਸਕਰਣ ਨੂੰ ਬਦਲਣ ਦੀ ਬਹੁਤ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ."
          },
          "buttons": {
            "confirm": "ਅੰਗਰੇਜ਼ੀ 'ਤੇ ਬਦਲੋ",
            "deny": "ਬਦਲੋ ਨਾ"
          }
        },
        "country_limit": {
          "heading": "ਸਮਰਥਿਤ ਦੇਸ਼",
          "message": {
            "line1": "ਜੇ ਤੁਸੀਂ ਇਸ ਪੰਨੇ 'ਤੇ ਦੇਸ਼ ਨਹੀਂ ਵੇਖਦੇ <em>(ਉਦਾਹਰਨ ਲਈ: ਭਾਰਤ, ਪਾਕਿਸਤਾਨ)</em>, ਤਾਂ ਇਹ ਐਕਸਟੈਂਸ਼ਨ ਤੁਹਾਡੇ ਲਈ ਨਹੀਂ ਹੈ. ਡਿਵੈਲਪਰ ਇਸ ਬਾਰੇ ਕੁਝ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਮਾਫ ਕਰਨਾ।",
            "line2": "ਅੱਗੇ ਵਧਣ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਦੇਸ਼ ਦੀ ਚੋਣ ਕਰੋ"
          },
          "buttons": {
            "confirm": "ਠੀਕ ਹੈ"
          }
        },
        "ext_usage": {
          "heading": "ਐਕਸਟੈਂਸ਼ਨ ਵਰਤੋਂ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼",
          "message": {
            "line1": "ਇਹ ਐਕਸਟੈਂਸ਼ਨ ਉਹਨਾਂ ਵਿਅਕਤੀਆਂ ਦੁਆਰਾ ਵਰਤੇ ਜਾਣ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ ਜਿਨ੍ਹਾਂ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਮੁਲਾਕਾਤ ਹੈ ਅਤੇ ਉਹ ਆਪਣੀ ਨਿਯੁਕਤੀ ਦੀ ਮਿਤੀ ਨੂੰ ਅੱਗੇ ਵਧਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਹੇ ਹਨ।",
            "line2": "ਅਜਿਹੀਆਂ ਰਿਪੋਰਟਾਂ ਆਈਆਂ ਹਨ ਕਿ ਕੁਝ ਦੂਤਾਵਾਸਾਂ ਨੇ ਤੁਹਾਡੇ ਵੱਲੋਂ ਮੁੜ-ਨਿਰਧਾਰਤ ਕੀਤੇ ਜਾਣ ਵਾਲੇ ਸਮੇਂ ਦੀ ਗਿਣਤੀ ਨੂੰ ਸੀਮਤ ਕਰ ਦਿੱਤਾ ਹੈ। ਇਸ ਨੂੰ ਘੱਟ ਕਰਨ ਲਈ, ਐਕਸਟੈਂਸ਼ਨ ਤੁਹਾਨੂੰ ਇੱਕ ਖਾਸ ਤਾਰੀਖ ਸੀਮਾ ਦੇ ਅੰਦਰ ਸਲਾਟਾਂ ਦੀ ਜਾਂਚ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ.",
            "line3": "ਜੇ ਤੁਸੀਂ ਇਸ ਵੈੱਬਸਾਈਟ ਤੋਂ ਕੋਈ ਸੁਨੇਹਾ ਦੇਖਦੇ ਹੋ ਜੋ ਤੁਹਾਨੂੰ ਸੂਚਿਤ ਕਰਦਾ ਹੈ ਕਿ ਤੁਸੀਂ ਸਿਰਫ ਕੁਝ ਵਾਰ ਮੁੜ-ਨਿਰਧਾਰਤ ਕਰ ਸਕਦੇ ਹੋ, ਤਾਂ ਐਕਸਟੈਂਸ਼ਨ ਦੀ ਵਰਤੋਂ ਬੰਦ ਕਰਨ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ. ਤੁਹਾਡੇ ਵੱਲੋਂ ਉਸ ਚੇਤਾਵਨੀ ਨੂੰ ਵੇਖਣ ਤੋਂ ਬਾਅਦ ਡਿਵੈਲਪਰ ਕਿਸੇ ਵੀ ਗਿਰਾਵਟ ਲਈ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹੋਵੇਗਾ।"
          },
          "buttons": {
            "confirm": "ਮੈਂ ਇਸ ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਇਸਦੀਆਂ ਸੀਮਾਵਾਂ ਦੇ ਅੰਦਰ ਵਰਤਣ ਲਈ ਸਹਿਮਤ ਹਾਂ"
          }
        },
        "update": {
          "heading": "ਅਪਡੇਟ",
          "message": {
            "line1": "ਐਕਸਟੈਂਸ਼ਨ ਦਾ ਇਹ ਸੰਸਕਰਣ ਤੁਹਾਨੂੰ ਰੀਸੈੱਟ ਕੀਤੇ ਬਿਨਾਂ ਆਪਣਾ ਸ਼ਹਿਰ ਬਦਲਣ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ.",
            "line2": "ਇਸ ਸੰਸਕਰਣ ਵਿੱਚ ਅੱਪਡੇਟ ਦੇਖਣ ਲਈ <b>ਅੱਪਡੇਟ ਵੇਖੋ</b> ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।"
          },
          "buttons": {
            "confirm": "ਛੱਡੋ",
            "cancel": "ਅੱਪਡੇਟ ਵੇਖੋ"
          }
        },
        "login": {
          "heading": "ਆਪਣੇ ਪ੍ਰਮਾਣ ਪੱਤਰ ਦਾਖਲ ਕਰੋ",
          "message": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਵੀਜ਼ਾ ਅਰਜ਼ੀ ਲਈ ਈਮੇਲ ਅਤੇ ਪਾਸਵਰਡ ਪ੍ਰਦਾਨ ਕਰੋ। ਜੇ ਤੁਸੀਂ ਲੌਗ ਆਊਟ ਹੋ ਤਾਂ ਐਕਸਟੈਂਸ਼ਨ ਇਸ ਦੀ ਵਰਤੋਂ ਲੌਗਇਨ ਕਰਨ ਲਈ ਕਰੇਗਾ। ਸਾਰੇ ਵੇਰਵੇ ਗੁਪਤ ਅਤੇ ਸੁਰੱਖਿਅਤ ਹਨ।",
          "error": "ਗਲਤ ਈਮੇਲ ਜਾਂ ਪਾਸਵਰਡ",
          "label": {
            "email": "ਤੁਹਾਡਾ ਈਮੇਲ ਪਤਾ",
            "password": "ਤੁਹਾਡਾ ਪਾਸਵਰਡ"
          },
          "placeholder": {
            "email": "ਆਪਣਾ ਈਮੇਲ ਪਤਾ ਦਾਖਲ ਕਰੋ",
            "password": "ਆਪਣਾ ਪਾਸਵਰਡ ਦਾਖਲ ਕਰੋ"
          },
          "buttons": {
            "confirm": "ਲਾਗਇਨ ਕਰੋ"
          },
          "footer": "ਐਕਸਟੈਂਸ਼ਨ ਅਜੇ ਕਿਰਿਆਸ਼ੀਲ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਲੌਗ ਇਨ ਨੂੰ ਪੂਰਾ ਕਰੋ।"
        },
        "scheduling_limit": {
          "heading": "ਉਡੀਕ ਕਰੋ! ਇਸ ਪੂਰੇ ਸੁਨੇਹੇ ਨੂੰ ਧਿਆਨ ਨਾਲ ਪੜ੍ਹੋ!",
          "message": {
            "line1": "ਐਕਸਟੈਂਸ਼ਨ ਨੇ ਪਤਾ ਲਗਾਇਆ ਹੈ ਕਿ ਵੈੱਬਸਾਈਟ ਨੇ ਸੀਮਤ ਕਰ ਦਿੱਤਾ ਹੈ ਕਿ ਤੁਸੀਂ ਅੱਗੇ ਜਾ ਕੇ ਆਪਣੀ ਅਪੌਇੰਟਮੈਂਟ ਨੂੰ ਕਿੰਨੀ ਵਾਰ ਰੀਸ਼ਡਿਊਲ ਕਰ ਸਕਦੇ ਹੋ। ਜਦੋਂ ਕਿ ਐਕਸਟੈਂਸ਼ਨ ਅਜੇ ਵੀ ਰੀਸ਼ਡਿਊਲਿੰਗ ਨੂੰ ਸਵੈਚਲਿਤ ਕਰ ਸਕਦੀ ਹੈ, ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਤਾਰੀਖਾਂ ਲਈ ਆਪਣੀਆਂ ਬਾਕੀ ਰੀਸ਼ਡਿਊਲ ਕੋਸ਼ਿਸ਼ਾਂ ਨੂੰ ਗੁਆਉਣ ਦਾ ਜੋਖਮ ਲਓਗੇ ਜੋ ਤੁਸੀਂ ਨਹੀਂ ਚਾਹੁੰਦੇ।",
            "line2": "ਜੇਕਰ ਤੁਸੀਂ ਆਟੋਮੇਸ਼ਨ ਨਾਲ ਅੱਗੇ ਵਧਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਡਿਵੈਲਪਰ ਤੁਹਾਨੂੰ ਆਟੋਬੁੱਕ ਸੈਟਿੰਗ ਨੂੰ ਬੰਦ ਕਰਨ ਦੀ ਜ਼ੋਰਦਾਰ ਸਿਫਾਰਸ਼ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਤੁਸੀਂ ਨਵੀਂ ਰੀਸ਼ਡਿਊਲਿੰਗ ਨੂੰ ਹੱਥੀਂ ਮਨਜ਼ੂਰੀ ਦੇ ਸਕੋ।",
            "line3": "ਇਹ ਡਿਵੈਲਪਰ ਵੱਲੋਂ ਤੁਹਾਡੀ ਆਖਰੀ ਚੇਤਾਵਨੀ ਹੈ।"
          },
          "buttons": {
            "confirm": "ਮੈਂ ਇਸਨੂੰ ਹੱਥੀਂ ਕਰਾਂਗਾ",
            "deny": "ਆਟੋਮੈਟਿਕ"
          }
        },
        "appointments": {
          "heading": "ਆਪਣੀ ਮੁਲਾਕਾਤ ਚੁਣੋ",
          "message": "ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚ ਕਈ ਮੁਲਾਕਾਤਾਂ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਉਸ ਮੁਲਾਕਾਤ ਦੀ ਚੋਣ ਕਰੋ ਜਿਸ ਵਾਸਤੇ ਤੁਸੀਂ ਸਕ੍ਰਿਪਟ ਨੂੰ ਚਲਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ।",
          "buttons": {
            "confirm": "ਪੁਸ਼ਟੀ ਕਰੋ"
          },
          "footer": "ਐਕਸਟੈਂਸ਼ਨ ਅਜੇ ਕਿਰਿਆਸ਼ੀਲ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਮੁਲਾਕਾਤ ਦੀ ਚੋਣ ਕਰੋ।"
        },
        "side_panel": {
          "heading": "ਸੈਟਿੰਗਾਂ ਇੱਕ ਨਵੇਂ ਖੇਤਰ ਵਿੱਚ ਚਲੀ ਗਈਆਂ ਹਨ",
          "message": "ਹੁਣ ਤੁਸੀਂ ਪੰਨੇ 'ਤੇ ਕਿਤੇ ਵੀ ਸੱਜਾ-ਕਲਿੱਕ ਕਰ ਸਕਦੇ ਹੋ ਅਤੇ ਸੈਟਿੰਗਾਂ ਨੂੰ ਐਕਸੈਸ ਕਰਨ ਲਈ <b>USA Visa Auto Rescheduler</b> ਦੀ ਚੋਣ ਕਰ ਸਕਦੇ ਹੋ।",
          "buttons": {
            "confirm": "ਹੁਣ ਸੈਟਿੰਗਾਂ ਖੋਲ੍ਹੋ",
            "deny": "ਮੈਂ ਇਸਦੀ ਬਾਅਦ ਵਿੱਚ ਜਾਂਚ ਕਰਾਂਗਾ"
          }
        },
        "first_appointment": {
          "heading": "ਤੁਸੀਂ ਇਸ ਐਕਸਟੈਂਸ਼ਨ ਦੀ ਵਰਤੋਂ ਨਹੀਂ ਕਰ ਸਕਦੇ।",
          "message": "ਇਸ ਐਕਸਟੈਂਸ਼ਨ ਲਈ ਤੁਹਾਨੂੰ ਭਵਿੱਖ ਦੀ ਮਿਤੀ ਵਿੱਚ ਪਹਿਲਾਂ ਹੀ ਮਿਲਣ ਦਾ ਸਮਾਂ ਲੈਣ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਮੁਲਾਕਾਤ ਨਹੀਂ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਤੁਰੰਤ ਹਟਾ ਦਿਓ।",
          "buttons": {
            "confirm": "ਠੀਕ ਹੈ"
          }
        },
        "frequency": {
          "heading": "ਜਾਂਚਾਂ ਦੀ ਬਾਰੰਬਾਰਤਾ",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "ਐਕਸਟੈਂਸ਼ਨ ਹਰ <strong>%minutes% ਮਿੰਟਾਂ</strong> ਵਿੱਚ ਪਹਿਲਾਂ ਮੁਲਾਕਾਤਾਂ ਵਾਸਤੇ ਜਾਂਚ ਕਰੇਗਾ",
              "line2": "ਜੇ ਤੁਸੀਂ ਬਾਰੰਬਾਰਤਾ ਨੂੰ ਬਦਲਣਾ ਚਾਹੁੰਦੇ ਹੋ ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਸੈਟਿੰਗਾਂ ਨੂੰ ਬਦਲੋ। ਮੁੱਲ ਨੂੰ ਬਦਲਣ ਲਈ ਤੁਸੀਂ ਆਪਣੇ ਮਾਊਸ ਜਾਂ ਖੱਬੇ '<' ਅਤੇ ਸੱਜੇ '>' ਤੀਰਾਂ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।"
            }
          },
          "buttons": {
            "confirm": "ਪੁਸ਼ਟੀ ਕਰੋ"
          },
          "footer": "ਐਕਸਟੈਂਸ਼ਨ ਅਜੇ ਕਿਰਿਆਸ਼ੀਲ ਨਹੀਂ ਹੈ। ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਕਿਰਿਆਸ਼ੀਲ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਆਖਰੀ ਕਦਮ ਹੈ।"
        },
        "init": {
          "heading": "ਸਭ ਠੀਕ ਹੈ!",
          "asc_type": {
            "false": "ਪਹਿਲੀ ਉਪਲਬਧ ਮਿਤੀ 'ਤੇ",
            "true": "ਵੀਜ਼ਾ ਮੁਲਾਕਾਤ ਦੇ ਸਭ ਤੋਂ ਨੇੜੇ"
          },
          "activated": "ਐਕਸਟੈਂਸ਼ਨ ਹੁਣ ਕਿਰਿਆਸ਼ੀਲ ਹੈ",
          "message": {
            "string": {
              "line1": "ਐਕਸਟੈਂਸ਼ਨ <strong>%email%</strong> ਲਈ ਕਿਰਿਆਸ਼ੀਲ ਹੈ ਅਤੇ %city% ਵਿੱਚ ਪਹਿਲਾਂ ਦੀਆਂ ਮੁਲਾਕਾਤਾਂ ਲੱਭਣ ਲਈ ਤਾਰੀਖ<strong>%date%</strong> ਦੀ ਵਰਤੋਂ ਕਰੇਗਾ।",
              "line2": "ਐਕਸਟੈਂਸ਼ਨ <strong>%ascLocation%</strong> %ascType% ਵਿੱਚ ASC ਮੁਲਾਕਾਤ ਤੈਅ ਕਰੇਗਾ।",
              "line3": "ਜੇ ਇਹ ਸਹੀ ਨਹੀਂ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਐਕਸਟੈਂਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰਨਾ ਬੰਦ ਕਰੋ ਅਤੇ ਤੁਰੰਤ ਡਿਵੈਲਪਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ। ਇਹ ਸੁਨੇਹਾ %timer% ਸਕਿੰਟਾਂ ਵਿੱਚ ਆਪਣੇ ਆਪ ਬੰਦ ਹੋ ਜਾਵੇਗਾ।",
              "line4": "ਤੁਸੀਂ ਸੈਟਿੰਗਾਂ ਖੇਤਰ ਵਿੱਚ ਆਟੋਬੁੱਕ ਅਤੇ ਐਪੋਇਟਮੈਂਟ ਮਿਤੀ ਵਿਕਲਪਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰ ਸਕਦੇ ਹੋ।"
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ!",
          "message": "ਤੁਹਾਡੀ ਵਰਤਮਾਨ ਮੁਲਾਕਾਤ ਮਿਤੀ ਦਾ ਪਤਾ ਨਹੀਂ ਲਗਾਇਆ ਗਿਆ ਹੈ। ਅੱਗੇ ਵਧਣ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੀ ਤਾਰੀਖ ਦਾਖਲ ਕਰੋ।",
          "err_message": "ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਤਾਰੀਖ ਦਾਖਲ ਕਰੋ।",
          "buttons": {
            "confirm": "ਪੁਸ਼ਟੀ ਕਰੋ"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ!",
            "deactivated": "ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਅਕਿਰਿਆਸ਼ੀਲ ਕੀਤਾ ਗਿਆ"
          },
          "message": {
            "warning": "ਐਕਸਟੈਂਸ਼ਨ ਕਿਸੇ ਹੋਰ ਟੈਬ 'ਤੇ ਕਿਰਿਆਸ਼ੀਲ ਹੈ। ਇਸ ਪੰਨੇ 'ਤੇ ਤੁਹਾਡੇ ਵੱਲੋਂ ਕੀਤੀ ਗਈ ਕੋਈ ਵੀ ਤਬਦੀਲੀ ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰੇਗੀ। ਜੇ ਤੁਸੀਂ ਇਸ ਪੰਨੇ ਵਿੱਚ ਤਬਦੀਲੀਆਂ ਕਰਨਾ ਜਾਰੀ ਰੱਖਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਅਕਿਰਿਆਸ਼ੀਲ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।",
            "deactivated": "ਤੁਸੀਂ ਸੈਟਿੰਗਾਂ ਖੇਤਰ ਤੋਂ ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਦੁਬਾਰਾ ਕਿਰਿਆਸ਼ੀਲ ਕਰ ਸਕਦੇ ਹੋ। ਜੇ ਤੁਸੀਂ ਪਹਿਲਾਂ ਕਿਰਿਆਸ਼ੀਲ ਟੈਬ ਨੂੰ ਬੰਦ ਕਰ ਦਿੱਤਾ ਹੈ, ਤਾਂ ਵਰਤਮਾਨ ਟੈਬ ਕਿਰਿਆਸ਼ੀਲ ਟੈਬ ਬਣ ਜਾਵੇਗਾ।"
          },
          "buttons": {
            "warning": {
              "confirm": "ਅਕਿਰਿਆਸ਼ੀਲ ਕਰੋ"
            },
            "deactivated": {
              "confirm": "ਸਮਝਿਆ ਗਿਆ"
            }
          }
        },
        "locations": {
          "heading": "ਕਿਰਪਾ ਕਰਕੇ ਚੁਣੋ",
          "message": {
            "consular": {
              "string": "ਤੁਹਾਡਾ ਵਰਤਮਾਨ ਇੰਟਰਵਿਊ ਸਥਾਨ <strong>%city%</strong> 'ਤੇ ਸੈੱਟ ਕੀਤਾ ਗਿਆ ਹੈ। ਆਪਣਾ ਟਿਕਾਣਾ ਬਦਲਣ ਲਈ, ਹੇਠਾਂ ਦਿੱਤੇ ਬਾਕਸ ਵਿੱਚ ਸ਼ਹਿਰ ਦੀ ਚੋਣ ਕਰੋ ਅਤੇ ਜਮ੍ਹਾਂ ਕਰੋ।",
              "is_dynamic": true
            },
            "asc": {
              "string": "ਤੁਹਾਡਾ ਵਰਤਮਾਨ ASC ਟਿਕਾਣਾ <strong>%city%</strong> 'ਤੇ ਸੈੱਟ ਕੀਤਾ ਗਿਆ ਹੈ। ਆਪਣਾ ਟਿਕਾਣਾ ਬਦਲਣ ਲਈ, ਹੇਠਾਂ ਦਿੱਤੇ ਬਾਕਸ ਵਿੱਚ ਸ਼ਹਿਰ ਦੀ ਚੋਣ ਕਰੋ ਅਤੇ ਜਮ੍ਹਾਂ ਕਰੋ।",
              "is_dynamic": true
            },
            "asc_type": "ਤੁਸੀਂ ਆਪਣੀ ASC ਮੁਲਾਕਾਤ ਦਾ ਸਮਾਂ ਕਦੋਂ ਤੈਅ ਕਰਨਾ ਚਾਹੋਂਗੇ?"
          },
          "asc_input_options": {
            "false": "ਪਹਿਲੀ ਉਪਲਬਧ ਮਿਤੀ",
            "true": "ਵੀਜ਼ਾ ਮੁਲਾਕਾਤ ਦੇ ਸਭ ਤੋਂ ਨੇੜੇ"
          },
          "buttons": {
            "confirm": "ਪੁਸ਼ਟੀ ਕਰੋ"
          },
          "footer": {
            "consular": "ਐਕਸਟੈਂਸ਼ਨ ਅਜੇ ਕਿਰਿਆਸ਼ੀਲ ਨਹੀਂ ਹੈ। ਤੁਹਾਡੀ ਕੌਂਸਲਰ ਮੁਲਾਕਾਤ ਦੇ ਸਥਾਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।",
            "asc": "ਐਕਸਟੈਂਸ਼ਨ ਅਜੇ ਕਿਰਿਆਸ਼ੀਲ ਨਹੀਂ ਹੈ। ਤੁਹਾਡੀ ASC ਮੁਲਾਕਾਤ ਦੇ ਸਥਾਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ।"
          }
        },
        "error": {
          "heading": "ਇੱਥੇ ਕੁਝ ਗਲਤ ਹੈ!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "ਬੇਨਤੀਆਂ ਨੂੰ ਸਪੈਮ ਕਰਨਾ ਬੰਦ ਕਰੋ। ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਆਪਣੇ ਆਪ ਵੈਬਪੇਜ ਨੂੰ ਮੁੜ ਲੋਡ ਕਰਨ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ. ਇਹ ਤੁਹਾਡੀ ਪਹਿਲੀ ਚੇਤਾਵਨੀ ਹੈ। ਤੁਹਾਨੂੰ %seconds% ਸਕਿੰਟਾਂ ਲਈ ਟਾਈਮ ਆਊਟ ਕੀਤਾ ਗਿਆ ਹੈ। ਇਸ ਨੂੰ ਦੁਹਰਾਉਣ ਦੇ ਨਤੀਜੇ ਵਜੋਂ ਤੁਹਾਡੀ ਈਮੇਲ ਪਰਮਾਬਨ ਹੋਵੇਗੀ।",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "ਤੁਸੀਂ ਪਲੱਗਇਨ ਦੇ ਪੁਰਾਣੇ ਸੰਸਕਰਣ %oldV% ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ। ਕਿਰਪਾ ਕਰਕੇ ਇਸਦੀ ਵਰਤੋਂ ਜਾਰੀ ਰੱਖਣ ਲਈ Chrome ਐਕਸਟੈਂਸ਼ਨ ਸਟੋਰ ਦੀ ਵਰਤੋਂ ਕਰਕੇ %newV% ਨੂੰ ਅੱਪਡੇਟ ਕਰੋ।",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "ਤੁਸੀਂ ਇਸ ਐਕਸਟੈਂਸ਼ਨ ਦੀ ਵਰਤੋਂ ਇਸ IP <strong>[%ip%]</strong> ਤੋਂ ਹਰ 30 ਦਿਨਾਂ ਬਾਅਦ %limit% ਮੁਫ਼ਤ ਖਾਤਿਆਂ ਵਾਸਤੇ ਕਰ ਸਕਦੇ ਹੋ। ਤੁਸੀਂ ਜਾਂ ਤਾਂ ਪਿਛਲੇ ਖਾਤਿਆਂ ਲਈ ਕ੍ਰੈਡਿਟ ਖਰੀਦ ਸਕਦੇ ਹੋ ਜਾਂ ਹੋਰ ਵਿਕਲਪਾਂ ਲਈ ਡਿਵੈਲਪਰ ਨਾਲ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ। ਕਿਰਪਾ ਕਰਕੇ ਈਮੇਲ ਵਿੱਚ ਇਸ IP ਦਾ ਜ਼ਿਕਰ ਕਰੋ।",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "ਤੁਸੀਂ %city% ਵਿੱਚ ਮੁੜ-ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ ਇਸ ਐਕਸਟੈਂਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੇ ਯੋਗ ਨਹੀਂ ਹੋ।",
                  "line2": "%reason%",
                  "line3": "ਜੇ ਤੁਸੀਂ ਇੱਕ ਅਸਲ ਉਪਭੋਗਤਾ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਅਨਲੌਕ ਕਰਨ ਲਈ ਡਿਵੈਲਪਰ ਨੂੰ ਇੱਕ ਈਮੇਲ ਭੇਜੋ।"
                },
                "is_dynamic": true
              },
              "email_banned": "ਸਪੈਮਿੰਗ ਲਈ ਤੁਹਾਡੀ ਈਮੇਲ ਨੂੰ ਇਸ ਐਕਸਟੈਂਸ਼ਨ ਤੋਂ ਬੈਨ ਕੀਤਾ ਗਿਆ ਹੈ।",
              "ip_banned": "ਤੁਹਾਡੇ IP 'ਤੇ ਪਰਮਾ-ਪਾਬੰਦੀ ਹੈ। ਪੌਂਡ ਰੇਤ।",
              "invalid_signature": "ਤੁਸੀਂ ਇੱਕ ਗੈਰ-ਕਾਨੂੰਨੀ ਐਕਸਟੈਂਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ। ਕਿਰਪਾ ਕਰਕੇ Chrome ਵੈੱਬ ਸਟੋਰ ਤੋਂ ਸਹੀ ਐਕਸਟੈਂਸ਼ਨ ਡਾਊਨਲੋਡ ਕਰੋ। ਸਹੀ ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਡਾਊਨਲੋਡ ਕਰਨ ਲਈ ਇੱਥੇ <a href='' ਨਿਸ਼ਾਨਾ='_blank'>ਇੱਥੇ ਕਲਿੱਕ</a> ਕਰੋ।",
              "no_email": "ਓਹੋ। ਐਕਸਟੈਂਸ਼ਨ ਨੇ ਤੁਹਾਡੀ ਈਮੇਲ ਦੀ ਪਛਾਣ ਨਹੀਂ ਕੀਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਪੰਨੇ ਨੂੰ ਤਾਜ਼ਾ ਕਰੋ। ਜੇ ਤੁਸੀਂ ਇਸ ਗਲਤੀ ਨੂੰ ਇੱਕ ਤੋਂ ਵੱਧ ਵਾਰ ਦੇਖ ਰਹੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਪਲੱਗਇਨ ਦੀ ਵਰਤੋਂ ਤੁਰੰਤ ਬੰਦ ਕਰੋ ਅਤੇ ਡਿਵੈਲਪਰ ਨੂੰ ਇੱਕ ਈਮੇਲ ਭੇਜੋ।",
              "no_date": "ਓਹੋ। ਐਕਸਟੈਂਸ਼ਨ ਨੇ ਤੁਹਾਡੀ ਵਰਤਮਾਨ ਮੁਲਾਕਾਤ ਮਿਤੀ ਦੀ ਪਛਾਣ ਨਹੀਂ ਕੀਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਪੰਨੇ ਨੂੰ ਤਾਜ਼ਾ ਕਰੋ। ਜੇ ਤੁਸੀਂ ਦੂਜੀ ਵਾਰ ਸੁਨੇਹਾ ਦੇਖਦੇ ਹੋ, ਤਾਂ ਸਾਈਨ ਆਊਟ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ। ਜੇ ਤੁਸੀਂ ਅਜੇ ਵੀ ਇਹ ਸੁਨੇਹਾ ਦੇਖਦੇ ਹੋ, ਤਾਂ ਪਲੱਗਇਨ ਦੀ ਵਰਤੋਂ ਤੁਰੰਤ ਬੰਦ ਕਰ ਦਿਓ ਅਤੇ ਡਿਵੈਲਪਰ ਨੂੰ ਇੱਕ ਈਮੇਲ ਭੇਜੋ।",
              "reset_count_reached": "ਤੁਸੀਂ ਮੁਫਤ ਕ੍ਰੈਡਿਟ ਰੀਚਾਰਜ ਦੀ ਸੀਮਾ ਤੱਕ ਪਹੁੰਚ ਗਏ ਹੋ। ਕਿਰਪਾ ਕਰਕੇ ਅਸੀਮਤ ਕ੍ਰੈਡਿਟ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਡਿਵੈਲਪਰ ਨੂੰ ਇੱਕ ਕੌਫੀ ਖਰੀਦਣ 'ਤੇ ਵਿਚਾਰ ਕਰੋ।",
              "already_paid": "ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਅਸੀਮਤ ਕ੍ਰੈਡਿਟਾਂ ਲਈ ਭੁਗਤਾਨ ਕਰ ਚੁੱਕੇ ਹੋ। ਕੀ ਤੁਸੀਂ ਅਜੇ ਵੀ ਡਿਵੈਲਪਰ ਲਈ ਵਧੇਰੇ ਕੌਫੀ ਖਰੀਦਣਾ ਚਾਹੁੰਦੇ ਹੋ?"
            },
            "browser": "ਅਨੰਤ ਲੂਪ ਨੂੰ ਰੋਕਣ ਲਈ, ਐਕਸਟੈਂਸ਼ਨ ਆਪਣੇ ਆਪ ਨੂੰ ਬੰਦ ਕਰ ਦੇਵੇਗਾ ਅਤੇ ਤੁਹਾਨੂੰ ਹੁਣੇ ਲੌਗ ਆਊਟ ਕਰ ਦੇਵੇਗਾ."
          },
          "buttons": {
            "confirm": "ਠੀਕ ਹੈ"
          }
        },
        "credits_exhausted": {
          "heading": "ਤੁਸੀਂ ਕ੍ਰੈਡਿਟ ਤੋਂ ਬਾਹਰ ਹੋ!",
          "message": {
            "recharge": {
              "string": {
                "line1": "ਐਕਸਟੈਂਸ਼ਨ ਲਈ ਤੁਹਾਡੇ ਕ੍ਰੈਡਿਟ ਖਤਮ ਹੋ ਗਏ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਰੀਚਾਰਜ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਵਿਕਲਪਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।",
                "line2": "ਤੁਹਾਡੇ ਕੋਲ <strong>%resets% ਮੁਫਤ ਰੀਚਾਰਜ ਹੈ।</strong>",
                "line3": "ਵਿਕਲਪਕ ਤੌਰ 'ਤੇ ਤੁਸੀਂ ਅਸੀਮਤ ਕ੍ਰੈਡਿਟ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਡਿਵੈਲਪਰ ਨੂੰ ਕੌਫੀ ਖਰੀਦ ਸਕਦੇ ਹੋ।"
              },
              "is_dynamic": true
            },
            "buy_coffee": "ਐਕਸਟੈਂਸ਼ਨ ਲਈ ਤੁਹਾਡੇ ਕ੍ਰੈਡਿਟ ਖਤਮ ਹੋ ਗਏ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਅਸੀਮਤ ਕ੍ਰੈਡਿਟ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਡਿਵੈਲਪਰ ਨੂੰ ਇੱਕ ਕੌਫੀ ਖਰੀਦੋ।",
            "waiting_for_completion": {
              "string": {
                "line1": "ਕਿਰਪਾ ਕਰਕੇ %email% ਲਈ ਦਾਨ ਨੂੰ ਪੂਰਾ ਕਰੋ",
                "line2": "ਭੁਗਤਾਨ ਪੂਰਾ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਪੰਨੇ ਨੂੰ ਤਾਜ਼ਾ ਕਰੋ. ਐਕਸਟੈਂਸ਼ਨ ਆਪਣੇ ਆਪ ਤੁਹਾਡੇ ਕ੍ਰੈਡਿਟ ਨੂੰ ਅੱਪਡੇਟ ਕਰ ਦੇਵੇਗਾ।"
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "ਮੁਫਤ ਰੀਚਾਰਜ",
            "confirm": "ਡਿਵੈਲਪਰ ਲਈ ਖਰੀਦੋ ☕"
          }
        }
      },
      "browser_notification": {
        "header": "ਨਵੀਂ ਮੁਲਾਕਾਤ ਮਿਲੀ",
        "message": {
          "string": "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ। ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ %date% 'ਤੇ ਇੱਕ ਨਵੀਂ ਮੁਲਾਕਾਤ ਮਿਲੀ। ਇਸ ਦੇ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਹੁਣੇ ਬੁੱਕ ਕਰੋ!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "ਪੁਸਤਕ",
          "ignore": "ਨਜ਼ਰਅੰਦਾਜ਼ ਕਰੋ"
        }
      },
      "settings": {
        "inactive": "ਇੱਕ ਵਾਰ ਜਦੋਂ ਤੁਸੀਂ ਐਕਸਟੈਂਸ਼ਨ ਨੂੰ ਕਿਰਿਆਸ਼ੀਲ ਕਰਦੇ ਹੋ, ਅਤੇ ਲੌਗਇਨ ਨੂੰ ਪੂਰਾ ਕਰਦੇ ਹੋ ਅਤੇ ਸਾਰੇ ਪੌਪ-ਅੱਪ ਕਦਮਾਂ ਨੂੰ ਪੂਰਾ ਕਰਦੇ ਹੋ ਤਾਂ ਇਹ ਖੇਤਰ ਪ੍ਰਦਰਸ਼ਿਤ ਕੀਤਾ ਜਾਵੇਗਾ।",
        "credits": "ਕ੍ਰੈਡਿਟ ਬਾਕੀ ਹਨ।",
        "donate": "ਡਿਵੈਲਪਰ ਲਈ ਖਰੀਦੋ ☕ 🙂",
        "unlimited": "ਕੋਈ ਵੀ ਦਾਨ ਤੁਹਾਨੂੰ ਅਸੀਮਤ ਕ੍ਰੈਡਿਟ ਪ੍ਰਾਪਤ ਕਰੇਗਾ।",
        "locale": "ਐਕਸਟੈਂਸ਼ਨ ਭਾਸ਼ਾ",
        "info": "ਸੈਟਿੰਗਾਂ ਹੇਠਾਂ ਦਿੱਤੀ ਮੁਲਾਕਾਤ ਲਈ ਹਨ:",
        "account_email": {
          "is_dynamic": true,
          "string": "ਖਾਤਾ ਈਮੇਲ: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "ਖਾਤਾ ext. ID: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "ਮੁਲਾਕਾਤ ID: <strong>%appointmentId%</strong>"
        },
        "support": "ਡਿਵੈਲਪਰ ਤੋਂ ਕਿਸੇ ਵੀ ਸਹਾਇਤਾ ਲਈ, ਕਿਰਪਾ ਕਰਕੇ ਖਾਤਾ ਐਕਸਟ. ID ਪ੍ਰਦਾਨ ਕਰੋ ਅਤੇ guduriabhinay@gmail.com ਨੂੰ ਇੱਕ ਈਮੇਲ ਭੇਜੋ। <a id=\"send_email\" href=\"#\">ਇੱਕ ਈਮੇਲ ਭੇਜਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ</a>",
        "activate": "ਸਕ੍ਰਿਪਟ ਨੂੰ ਕਿਰਿਆਸ਼ੀਲ ਕਰੋ",
        "autobook": "ਆਟੋਬੁੱਕ ਮੁਲਾਕਾਤਾਂ",
        "frequency": {
          "is_dynamic": true,
          "string": "ਜਾਂਚਾਂ ਦੀ ਬਾਰੰਬਾਰਤਾ (ਹਰ %frequency% ਮਿੰਟ)"
        },
        "cities": "ਇੰਟਰਵਿਊ ਲਈ ਸ਼ਹਿਰ",
        "startDate": "ਅਰੰਭ ਤਾਰੀਖ",
        "endDate": "ਸਮਾਪਤੀ ਮਿਤੀ",
        "reset": "ਸਭ ਕੁਝ ਰੀਸੈੱਟ ਕਰੋ",
        "faqs": "ਆਮ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ ਪੜ੍ਹੋ",
        "updates": "ਸਾਰੇ ਅੱਪਡੇਟ ਵੇਖੋ"
      }
    },
    "pt":{
      "toasts": {
        "message": {
          "no_dates_found": "Nenhum dado encontrado. Pode ter ocorrido um erro ou o limite interno do sistema foi excedido. A próxima verificação ocorrerá em 30 minutos.",
          "checked_dates": {
            "string": "Verificadas as datas entre %start% e %end% @ %now%",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Seu compromisso atual está em %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "Disponibilidade mais recente: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Data anterior encontrada: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "Nenhum intervalo de tempo encontrado na data: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "A próxima verificação será em: %date% em <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Confirmação do tipo de aplicativo",
          "message": {
            "line1": "Selecione se você está solicitando o Visto de Imigrante ou o Visto de Não-Imigrante para prosseguir.",
            "line2": "Além disso, esta extensão exige que você já tenha um compromisso em uma data futura. Se você não tiver um compromisso, desinstale a extensão imediatamente."
          },
          "buttons": {
            "confirm": "Visto de não-imigrante",
            "deny": "Visto de Imigrante"
          }
        },
        "en_lang": {
          "heading": "Confirmação de idioma",
          "message": {
            "line1": "Esta extensão foi projetada e otimizada para funcionar com a versão em inglês do site. Isso ocorre devido às diferentes maneiras pelas quais uma data do calendário é escrita em diferentes idiomas.",
            "line2": "É altamente recomendável mudar para a versão em inglês."
          },
          "buttons": {
            "confirm": "Mudar para inglês",
            "deny": "Não troque"
          }
        },
        "country_limit": {
          "heading": "Países Suportados",
          "message": {
            "line1": "Se você não vir o país nesta página <em>(por exemplo: Índia, Paquistão),</em> esta extensão não é para você. O desenvolvedor não pode fazer nada sobre isso. Desculpa.",
            "line2": "Selecione seu país para prosseguir"
          },
          "buttons": {
            "confirm": "Okey"
          }
        },
        "ext_usage": {
          "heading": "Diretrizes de uso de extensão",
          "message": {
            "line1": "Esta extensão foi projetada para ser usada por indivíduos que já têm hora marcada e desejam adiantar a data da consulta.",
            "line2": "Houve relatos de que certas embaixadas limitaram o número de vezes que você pode reagendar. Para minimizar isso, a extensão permite que você verifique se há slots dentro de um intervalo de datas específico.",
            "line3": "Se você vir uma mensagem deste site informando que só pode reagendar um determinado número de vezes, é recomendável parar de usar a extensão. O desenvolvedor não será responsável por qualquer precipitação depois que você vir esse aviso."
          },
          "buttons": {
            "confirm": "Autorizo a utilização desta extensão dentro dos seus limites"
          }
        },
        "update": {
          "heading": "Atualizações",
          "message": {
            "line1": "Esta versão da extensão permite que você mude sua cidade sem precisar redefinir.",
            "line2": "Clique no botão <b>Ver atualizações</b> para ver as atualizações nesta versão."
          },
          "buttons": {
            "confirm": "Saltitar",
            "cancel": "Ver atualizações"
          }
        },
        "login": {
          "heading": "Insira suas credenciais",
          "message": "Por favor, forneça o e-mail e a senha para o seu pedido de visto. A extensão usará isso para fazer login se você estiver desconectado. Todos os detalhes confidenciais e protegidos.",
          "error": "E-mail ou senha inválidos",
          "label": {
            "email": "Seu endereço de e-mail",
            "password": "Sua senha"
          },
          "placeholder": {
            "email": "Digite seu endereço de e-mail",
            "password": "Digite sua senha"
          },
          "buttons": {
            "confirm": "Iniciar sessão"
          },
          "footer": "A extensão ainda não está ativa. Por favor, complete o login."
        },
        "scheduling_limit": {
          "heading": "Espere! Leia esta mensagem inteira com atenção!",
          "message": {
            "line1": "A extensão detectou que o site limitou o número de vezes que você pode reagendar sua consulta daqui para frente. Embora a extensão ainda possa automatizar o reagendamento, você corre o risco de perder suas tentativas restantes de reagendamento para as datas que não deseja.",
            "line2": "Se você deseja prosseguir com a automação, o desenvolvedor recomenda fortemente que você desative a configuração de reserva automática para que possa aprovar manualmente novos reagendamentos.",
            "line3": "Este é o seu último aviso do desenvolvedor."
          },
          "buttons": {
            "confirm": "Farei manualmente",
            "deny": "Automatizar"
          }
        },
        "appointments": {
          "heading": "Selecione seu agendamento",
          "message": "Existem vários compromissos em sua conta. Selecione o compromisso para o qual deseja executar o script.",
          "buttons": {
            "confirm": "Confirmar"
          },
          "footer": "A extensão ainda não está ativa. Selecione o agendamento correto."
        },
        "side_panel": {
          "heading": "As configurações foram movidas para uma nova área",
          "message": "Agora você pode clicar com o botão direito do mouse em qualquer lugar da página e selecionar <b>USA Visa Auto Rescheduler</b> para acessar as configurações.",
          "buttons": {
            "confirm": "Abra as configurações agora",
            "deny": "Vou verificar mais tarde"
          }
        },
        "first_appointment": {
          "heading": "Você não pode usar esta extensão.",
          "message": "Esta extensão exige que você já tenha um compromisso em uma data futura. Se você não tiver um compromisso, remova a extensão imediatamente.",
          "buttons": {
            "confirm": "OKEY"
          }
        },
        "frequency": {
          "heading": "Frequência dos controlos",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "A extensão verificará se há compromissos anteriores a cada <strong>%minutes% minutos</strong>",
              "line2": "Altere as configurações abaixo se desejar alterar a frequência. Você pode usar o mouse ou as setas '<' esquerda e '>' direita para alterar o valor."
            }
          },
          "buttons": {
            "confirm": "Confirmar"
          },
          "footer": "A extensão ainda não está ativa. Esta é a última etapa antes que a extensão seja ativada."
        },
        "init": {
          "heading": "Tudo pronto!",
          "asc_type": {
            "false": "na primeira data disponível",
            "true": "mais próximo da nomeação do VISA"
          },
          "activated": "A extensão está agora ativada",
          "message": {
            "string": {
              "line1": "A extensão é ativada para <strong>%email%</strong> e usará a data <strong>%date%</strong> para encontrar compromissos anteriores em %city%.",
              "line2": "A extensão agendará a consulta do ASC em <strong>%ascLocation%</strong> %ascType%.",
              "line3": "Se isso não estiver correto, pare de usar a extensão e entre em contato com o desenvolvedor imediatamente. Esta mensagem será fechada automaticamente em %timer% segundos.",
              "line4": "Você pode gerenciar as opções de reserva automática e data de nomeação na área de configurações."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "Atenção, por favor!",
          "message": "A data do seu compromisso atual não é detectada. Insira a data abaixo para prosseguir.",
          "err_message": "Digite a data correta, por favor.",
          "buttons": {
            "confirm": "Confirmar"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "Atenção, por favor!",
            "deactivated": "Extensão desativada"
          },
          "message": {
            "warning": "A extensão está ativa em outra guia. Qualquer alteração feita nesta página afetará a extensão. Se você deseja continuar fazendo alterações nesta página, clique no botão abaixo para desativar a extensão.",
            "deactivated": "Você pode ativar a extensão novamente na área de configurações. Caso você tenha fechado a guia ativa anteriormente, a guia atual se tornará a guia ativa."
          },
          "buttons": {
            "warning": {
              "confirm": "Desativar"
            },
            "deactivated": {
              "confirm": "Compreendido"
            }
          }
        },
        "locations": {
          "heading": "Por favor, selecione",
          "message": {
            "consular": {
              "string": "O local atual da entrevista está definido como <strong>%city%.</strong> Para alterar sua localização, selecione a cidade na caixa abaixo e envie.",
              "is_dynamic": true
            },
            "asc": {
              "string": "Seu local atual do ASC está definido como <strong>%city%.</strong> Para alterar sua localização, selecione a cidade na caixa abaixo e envie.",
              "is_dynamic": true
            },
            "asc_type": "Quando você gostaria de agendar sua consulta no ASC?"
          },
          "asc_input_options": {
            "false": "Primeira data disponível",
            "true": "Mais próximo da entrevista VISA"
          },
          "buttons": {
            "confirm": "Confirmar"
          },
          "footer": {
            "consular": "A extensão ainda não está ativa. Confirme o local do seu Agendamento Consular.",
            "asc": "A extensão ainda não está ativa. Confirme o local do seu agendamento ASC."
          }
        },
        "error": {
          "heading": "Algo está errado aqui!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "Pare de enviar spam para as solicitações. A extensão foi projetada para recarregar a página da Web por conta própria. Este é o seu primeiro aviso. Você atingiu o tempo limite por %seconds% segundos. Uma repetição disso resultará no banimento permanente do seu e-mail.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "Você está usando uma versão desatualizada %oldV% do plugin. Atualize para %newV% usando a loja de extensões do Chrome para continuar usando-o.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "Você só pode usar esta extensão para %limit% contas gratuitas a cada 30 dias a partir deste IP <strong>[%ip%]</strong>. Você pode comprar créditos para contas anteriores ou entrar em contato com o desenvolvedor para obter outras opções. Por favor, mencione este IP no e-mail.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "Não é possível utilizar esta extensão para reagendamento em %city%.",
                  "line2": "%reason%",
                  "line3": "Se você é um usuário genuíno, envie um e-mail para o desenvolvedor para desbloquear."
                },
                "is_dynamic": true
              },
              "email_banned": "Seu e-mail foi banido desta extensão por spam.",
              "ip_banned": "Seu IP está banido permanentemente. Areia de libra.",
              "invalid_signature": "Você está usando uma extensão inválida. Faça o download da extensão correta na Chrome Web Store. Clique em <a href='' target='_blank'>aqui</a> para baixar a extensão correta.",
              "no_email": "Oops. A extensão não identificou seu e-mail. Por favor, atualize a página. Se você estiver vendo esse erro por mais de uma vez, pare de usar o plug-in imediatamente e envie um e-mail para o desenvolvedor.",
              "no_date": "Oops. A extensão não identificou a data atual do seu compromisso. Por favor, atualize a página. Se você vir a mensagem pela segunda vez, tente sair. Se você ainda vir esta mensagem, pare de usar o plug-in imediatamente e envie um e-mail para o desenvolvedor.",
              "reset_count_reached": "Você atingiu o limite de recargas de crédito gratuitas. Por favor, considere comprar um café para o desenvolvedor para obter créditos ilimitados.",
              "already_paid": "Você já pagou por créditos ilimitados. Você ainda deseja comprar mais cafés para o desenvolvedor?"
            },
            "browser": "Para evitar um loop infinito, a extensão se desligará e desconectará você agora."
          },
          "buttons": {
            "confirm": "OKEY"
          }
        },
        "credits_exhausted": {
          "heading": "Você está sem créditos!",
          "message": {
            "recharge": {
              "string": {
                "line1": "Seus créditos para a extensão estão esgotados. Use as opções abaixo para recarregar.",
                "line2": "Você tem <strong>%resets% recarga gratuita.</strong>",
                "line3": "Alternativamente, você pode comprar um café para o desenvolvedor para receber créditos ilimitados."
              },
              "is_dynamic": true
            },
            "buy_coffee": "Seus créditos para a extensão estão esgotados. Por favor, compre um café para o desenvolvedor para receber créditos ilimitados.",
            "waiting_for_completion": {
              "string": {
                "line1": "Por favor, complete a doação para %email%.",
                "line2": "Depois de concluir o pagamento, atualize esta página. A extensão atualizará automaticamente os seus créditos."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Recarga grátis",
            "confirm": "Compre ☕ para o desenvolvedor"
          }
        }
      },
      "browser_notification": {
        "header": "Novo compromisso encontrado",
        "message": {
          "string": "Oi. A extensão encontrou um novo compromisso em %date%. Reserve agora antes que acabe!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Livro",
          "ignore": "Ignorar"
        }
      },
      "settings": {
        "inactive": "Esta área será exibida assim que você ativar a extensão, concluir o login e concluir todas as etapas pop-up.",
        "credits": "Créditos restantes.",
        "donate": "Compre ☕ para o desenvolvedor 🙂",
        "unlimited": "Qualquer doação lhe dará créditos ilimitados.",
        "locale": "Linguagem de extensão",
        "info": "As configurações são para o compromisso abaixo:",
        "account_email": {
          "is_dynamic": true,
          "string": "E-mail da conta: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "ID de saída da conta: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "ID do compromisso: <strong>%appointmentId%</strong>"
        },
        "support": "Para qualquer suporte do desenvolvedor, forneça o ID do ramal da conta e envie um e-mail para guduriabhinay@gmail.com. Clique aqui para <a id=\"send_email\" href=\"#\">send an email</a>",
        "activate": "Ativar o script",
        "autobook": "Agendamento automático de compromissos",
        "frequency": {
          "is_dynamic": true,
          "string": "Frequência das verificações (a cada %frequency% minutos)"
        },
        "cities": "Cidade para entrevista",
        "startDate": "Data de início",
        "endDate": "Data de término",
        "reset": "Redefinir tudo",
        "faqs": "Leia as perguntas frequentes",
        "updates": "Ver todas as atualizações"
      }
    },
    "ru":{
      "toasts": {
        "message": {
          "no_dates_found": "Данные не найдены. Возможно, произошла ошибка или превышен внутренний системный лимит. Следующая проверка будет через 30 минут.",
          "checked_dates": {
            "string": "Проверено на наличие дат между %start% и %end% @ %now%",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Ваша текущая запись на %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "Актуальная доступность: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Найдена более ранняя дата: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "Временные интервалы на дату не найдены: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "Следующая проверка будет по адресу: %date% в <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Подтверждение типа приложения",
          "message": {
            "line1": "Пожалуйста, выберите, подаете ли вы заявление на иммиграционную визу или неиммиграционную визу, чтобы продолжить.",
            "line2": "Кроме того, это продление требует, чтобы у вас уже была назначена встреча в будущем. Если у вас нет записи, немедленно удалите расширение."
          },
          "buttons": {
            "confirm": "Неиммиграционная виза",
            "deny": "Иммиграционная виза"
          }
        },
        "en_lang": {
          "heading": "Подтверждение языка",
          "message": {
            "line1": "Данное расширение разработано и оптимизировано для работы с английской версией сайта. Это связано с тем, что календарная дата записывается по-разному на разных языках.",
            "line2": "Настоятельно рекомендуется перейти на английскую версию."
          },
          "buttons": {
            "confirm": "Переключиться на английский язык",
            "deny": "Не переключайтесь"
          }
        },
        "country_limit": {
          "heading": "Поддерживаемые страны",
          "message": {
            "line1": "Если вы не видите страну на этой странице <em>(например, Индия, Пакистан),</em> это расширение не для вас. Разработчик ничего не может с этим поделать. Извините.",
            "line2": "Пожалуйста, выберите свою страну, чтобы продолжить"
          },
          "buttons": {
            "confirm": "Хорошо"
          }
        },
        "ext_usage": {
          "heading": "Рекомендации по использованию расширений",
          "message": {
            "line1": "Это расширение предназначено для людей, которые уже записались на прием и хотят перенести дату приема на более ранний срок.",
            "line2": "Были сообщения о том, что некоторые посольства ограничили количество переносов. Чтобы свести это к минимуму, расширение позволяет проверять наличие слотов в определенном диапазоне дат.",
            "line3": "Если вы видите сообщение с этого веб-сайта, информирующее вас о том, что вы можете перенести только определенное количество раз, рекомендуется прекратить использование расширения. Разработчик не несет ответственности за какие-либо последствия после того, как вы увидите это предупреждение."
          },
          "buttons": {
            "confirm": "Я даю согласие на использование данного расширения в его пределах"
          }
        },
        "update": {
          "heading": "Обновления",
          "message": {
            "line1": "Эта версия расширения позволяет вам изменить свой город без необходимости сбрасывать настройки.",
            "line2": "Нажмите на кнопку <b>«Просмотреть обновления»,</b> чтобы увидеть обновления в этой версии."
          },
          "buttons": {
            "confirm": "Скип",
            "cancel": "Смотреть обновления"
          }
        },
        "login": {
          "heading": "Введите свои учетные данные",
          "message": "Пожалуйста, укажите адрес электронной почты и пароль для подачи заявления на визу. Расширение будет использовать это для входа в систему, если вы вышли из системы. Все детали конфиденциальны и защищены.",
          "error": "Неверный адрес электронной почты или пароль",
          "label": {
            "email": "Ваш адрес электронной почты",
            "password": "Ваш пароль"
          },
          "placeholder": {
            "email": "Введите свой адрес электронной почты",
            "password": "Введите свой пароль"
          },
          "buttons": {
            "confirm": "Войти"
          },
          "footer": "Расширение еще не активно. Пожалуйста, завершите вход в систему."
        },
        "scheduling_limit": {
          "heading": "Подождите! Внимательно прочитайте это сообщение!",
          "message": {
            "line1": "Расширение обнаружило, что веб-сайт ограничил количество попыток переноса вашей записи в будущем. Хотя расширение по-прежнему может автоматизировать перенос, вы рискуете потерять оставшиеся попытки переноса на ненужные вам даты.",
            "line2": "Если вы хотите продолжить автоматизацию, разработчик настоятельно рекомендует вам отключить автоматическое бронирование, чтобы вы могли вручную одобрять новые переносы.",
            "line3": "Это ваше последнее предупреждение от разработчика."
          },
          "buttons": {
            "confirm": "Я сделаю это вручную",
            "deny": "Автоматизировать"
          }
        },
        "appointments": {
          "heading": "Выберите встречу",
          "message": "В вашей учетной записи есть несколько встреч. Пожалуйста, выберите встречу, для которой вы хотите запустить скрипт.",
          "buttons": {
            "confirm": "Подтверждать"
          },
          "footer": "Расширение еще не активно. Пожалуйста, выберите правильную запись."
        },
        "side_panel": {
          "heading": "Настройки перенесены в новую область",
          "message": "Теперь вы можете щелкнуть правой кнопкой мыши в любом месте страницы и выбрать <b>USA Visa Auto Rescheduler</b>, чтобы получить доступ к настройкам.",
          "buttons": {
            "confirm": "Открыть настройки сейчас",
            "deny": "Я проверю это позже"
          }
        },
        "first_appointment": {
          "heading": "Вы не можете использовать это расширение.",
          "message": "Для этого продления необходимо, чтобы у вас уже была назначена встреча в будущем. Если у вас нет записи, немедленно отмените продление.",
          "buttons": {
            "confirm": "ХОРОШО"
          }
        },
        "frequency": {
          "heading": "Периодичность проверок",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "Расширение будет проверять наличие более ранних назначений каждые <strong>%minutes% минут</strong>",
              "line2": "Пожалуйста, измените настройки ниже, если вы хотите изменить частоту. Вы можете использовать мышь или стрелки влево '<' и вправо '>' для изменения значения."
            }
          },
          "buttons": {
            "confirm": "Подтверждать"
          },
          "footer": "Расширение еще не активно. Это последний шаг перед активацией расширения."
        },
        "init": {
          "heading": "Все готово!",
          "asc_type": {
            "false": "в первую доступную дату",
            "true": "ближе всего к записи на визу"
          },
          "activated": "Теперь расширение активировано",
          "message": {
            "string": {
              "line1": "Расширение активируется для <strong>%email%</strong> и будет использовать дату <strong>%date%</strong> для поиска более ранних встреч в %city%.",
              "line2": "Добавочный номер запишет запись на прием ASC в <strong>%ascLocation%</strong> %ascType%.",
              "line3": "Если это не так, прекратите использование расширения и немедленно свяжитесь с разработчиком. Это сообщение автоматически закроется через %timer% секунд.",
              "line4": "Вы можете управлять параметрами автобронирования и даты назначения в области настроек."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "Внимание!",
          "message": "Ваша текущая дата встречи не определяется. Пожалуйста, введите дату ниже, чтобы продолжить.",
          "err_message": "Введите правильную дату, пожалуйста.",
          "buttons": {
            "confirm": "Подтверждать"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "Внимание!",
            "deactivated": "Расширение отключено"
          },
          "message": {
            "warning": "Расширение активно на другой вкладке. Любые изменения, внесенные на этой странице, повлияют на расширение. Если вы хотите продолжить внесение изменений на этой странице, нажмите кнопку ниже, чтобы деактивировать расширение.",
            "deactivated": "Вы можете снова активировать расширение в области настроек. В случае, если вы закрыли ранее активную вкладку, текущая вкладка станет активной."
          },
          "buttons": {
            "warning": {
              "confirm": "Деактивировать"
            },
            "deactivated": {
              "confirm": "Понял"
            }
          }
        },
        "locations": {
          "heading": "Пожалуйста, выберите",
          "message": {
            "consular": {
              "string": "Ваше текущее место собеседования установлено на <strong>%city%</strong>. Чтобы изменить свое местоположение, выберите город в поле ниже и отправьте заявку.",
              "is_dynamic": true
            },
            "asc": {
              "string": "Ваше текущее местоположение ASC установлено на <strong>%city%</strong>. Чтобы изменить свое местоположение, выберите город в поле ниже и отправьте заявку.",
              "is_dynamic": true
            },
            "asc_type": "Когда вы хотите записаться на прием к врачу с помощью ASC?"
          },
          "asc_input_options": {
            "false": "Первая доступная дата",
            "true": "Ближе всего к записи на визу"
          },
          "buttons": {
            "confirm": "Подтверждать"
          },
          "footer": {
            "consular": "Расширение еще не активно. Подтвердите место назначения консульского собеседования.",
            "asc": "Расширение еще не активно. Подтвердите место назначения ASC."
          }
        },
        "error": {
          "heading": "Что-то здесь не так!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "Прекратите рассылать спам по запросам. Расширение предназначено для самостоятельной перезагрузки веб-страницы. Это ваше первое предупреждение. Время ожидания истекает на %seconds% seconds. Повторение этого приведет к тому, что ваша электронная почта будет навсегда заблокирована.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "Вы используете устаревшую версию плагина %oldV%. Пожалуйста, обновите его до %newV% с помощью магазина расширений Chrome, чтобы продолжить его использование.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "Вы можете использовать это расширение только для %limit% бесплатных аккаунтов каждые 30 дней с этого IP-адреса <strong>[%ip%]</strong>. Вы можете либо приобрести кредиты для предыдущих учетных записей, либо связаться с разработчиком для получения других вариантов. Пожалуйста, укажите этот IP-адрес в электронном письме.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "Вы не можете использовать это расширение для переноса в %city%.",
                  "line2": "%reason%",
                  "line3": "Если вы настоящий пользователь, пожалуйста, отправьте электронное письмо разработчику для разблокировки."
                },
                "is_dynamic": true
              },
              "email_banned": "Ваша электронная почта заблокирована в этом расширении за рассылку спама.",
              "ip_banned": "Ваш IP заблокирован навсегда. Песок толочь.",
              "invalid_signature": "Вы используете недействительное расширение. Загрузите соответствующее расширение из Интернет-магазина Chrome. Нажмите <a href='' target='_blank'>здесь</a>, чтобы загрузить правильное расширение.",
              "no_email": "Ой. Расширение не определило ваш адрес электронной почты. Пожалуйста, обновите страницу. Если вы видите эту ошибку более одного раза, немедленно прекратите использование плагина и отправьте электронное письмо разработчику.",
              "no_date": "Ой. При продлении не была указана ваша текущая дата приема. Пожалуйста, обновите страницу. Если вы видите сообщение во второй раз, попробуйте выйти из системы. Если вы по-прежнему видите это сообщение, немедленно прекратите использование плагина и отправьте электронное письмо разработчику.",
              "reset_count_reached": "Вы достигли лимита бесплатных пополнений кредита. Пожалуйста, подумайте о том, чтобы купить разработчику кофе, чтобы получить неограниченное количество кредитов.",
              "already_paid": "Вы уже оплатили неограниченное количество кредитов. Вы все еще хотите покупать больше кофе застройщику?"
            },
            "browser": "Чтобы предотвратить бесконечный цикл, расширение выключит себя и выведет вас из системы."
          },
          "buttons": {
            "confirm": "ХОРОШО"
          }
        },
        "credits_exhausted": {
          "heading": "У вас закончились кредиты!",
          "message": {
            "recharge": {
              "string": {
                "line1": "Ваши кредиты для продления исчерпаны. Пожалуйста, используйте приведенные ниже варианты для зарядки.",
                "line2": "У вас есть <strong>%resets% бесплатного пополнения.</strong>",
                "line3": "Как вариант, вы можете купить разработчику кофе, чтобы получить неограниченное количество кредитов."
              },
              "is_dynamic": true
            },
            "buy_coffee": "Ваши кредиты для продления исчерпаны. Пожалуйста, купите разработчику кофе, чтобы получить неограниченное количество кредитов.",
            "waiting_for_completion": {
              "string": {
                "line1": "Пожалуйста, завершите пожертвование для %email%.",
                "line2": "После завершения оплаты, пожалуйста, обновите эту страницу. Расширение автоматически обновит ваши кредиты."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Бесплатное пополнение счета",
            "confirm": "Купить ☕ для застройщика"
          }
        }
      },
      "browser_notification": {
        "header": "Найдена новая запись",
        "message": {
          "string": "Привет. Продление нашло новую встречу на %date%. Забронируйте сейчас, пока он не исчез!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Книга",
          "ignore": "Игнорировать"
        }
      },
      "settings": {
        "inactive": "Эта область отобразится после того, как вы активируете расширение, выполните вход в систему и завершите все всплывающие шаги.",
        "credits": "Остались титры.",
        "donate": "Купить ☕ для застройщика 🙂",
        "unlimited": "Любое пожертвование принесет вам неограниченное количество кредитов.",
        "locale": "Язык расширения",
        "info": "Настройки относятся к следующей записи:",
        "account_email": {
          "is_dynamic": true,
          "string": "Электронная почта аккаунта: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "Внешний идентификатор учетной записи: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "Идентификатор встречи: <strong>%appointmentId%</strong>"
        },
        "support": "Для получения любой поддержки от разработчика, пожалуйста, предоставьте идентификатор учетной записи и отправьте электронное письмо по адресу guduriabhinay@gmail.com. Нажмите здесь, чтобы <a id=\"send_email\" href=\"#\">отправить электронное письмо</a>",
        "activate": "Активируйте скрипт",
        "autobook": "Автозапись на прием",
        "frequency": {
          "is_dynamic": true,
          "string": "Периодичность проверок (каждые %frequency% минут)"
        },
        "cities": "Город для собеседования",
        "startDate": "Дата начала",
        "endDate": "Дата окончания",
        "reset": "Сбросить все",
        "faqs": "Читать часто задаваемые вопросы",
        "updates": "Посмотреть все обновления"
      }
    },
    "uk":{
      "toasts": {
        "message": {
          "no_dates_found": "Не знайдено жодної дати. Можливо, сталася помилка або перевищено внутрішній ліміт системи. Наступна перевірка відбудеться через 30 хвилин.",
          "checked_dates": {
            "string": "Перевірено дати між %start% та %end% о %now%",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Ваш поточний запис на %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "Остання доступна дата: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Знайдено ранішу дату: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "Не знайдено доступних часових проміжків на дату: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "Наступна перевірка відбудеться: %date% через <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Підтвердження типу заявки",
          "message": {
            "line1": "Будь ласка, виберіть, чи ви подаєте на імміграційну візу чи неімміграційну візу, щоб продовжити.",
            "line2": "Також це розширення вимагає, щоб у вас уже була призначена зустріч на майбутню дату. Якщо у вас немає призначення, будь ласка, негайно видаліть розширення."
          },
          "buttons": {
            "confirm": "Неімміграційна віза",
            "deny": "Імміграційна віза"
          }
        },
        "en_lang": {
          "heading": "Підтвердження мови",
          "message": {
            "line1": "Це розширення розроблене та оптимізоване для роботи з англійською версією сайту. Це пов’язано з різними способами написання дати в різних мовах.",
            "line2": "Рекомендується переключитися на англійську версію."
          },
          "buttons": {
            "confirm": "Переключитися на англійську",
            "deny": "Не переключатися"
          }
        },
        "country_limit": {
          "heading": "Підтримувані країни",
          "message": {
            "line1": "Якщо ви не бачите свою країну на цій сторінці <em>(наприклад: Індія, Пакистан)</em>, це розширення не для вас. Розробник нічого не може з цим вдіяти. Вибачте.",
            "line2": "Будь ласка, оберіть вашу країну, щоб продовжити"
          },
          "buttons": {
            "confirm": "OK"
          }
        },
        "ext_usage": {
          "heading": "Керівництво з використання розширення",
          "message": {
            "line1": "Це розширення призначене для користувачів, які вже мають призначену зустріч і бажають перенести її на більш ранню дату.",
            "line2": "Повідомлялося, що деякі посольства обмежують кількість перенесень. Щоб зменшити ризик, розширення дозволяє перевіряти доступні дати в певному діапазоні.",
            "line3": "Якщо ви бачите повідомлення на порталі про обмежену кількість перенесень, рекомендується припинити використання розширення. Розробник не несе відповідальності за наслідки після такого попередження."
          },
          "buttons": {
            "confirm": "Я погоджуюся використовувати це розширення в межах його обмежень"
          }
        },
        "update": {
          "heading": "Оновлення",
          "message": {
            "line1": "Ця версія розширення дозволяє змінювати місто без скидання налаштувань.",
            "line2": "Натисніть кнопку \"Див. оновлення\", щоб переглянути зміни в цій версії."
          },
          "buttons": {
            "confirm": "Пропустити",
            "cancel": "Див. оновлення"
          }
        },
        "login": {
          "heading": "Введіть свої дані для входу",
          "message": "Будь ласка, введіть електронну адресу та пароль для вашої візової заявки. Розширення використовуватиме їх для входу, якщо вас буде виведено з системи. Дані не зберігаються.",
          "error": "Неправильний email або пароль",
          "label": {
            "email": "Ваша електронна адреса",
            "password": "Ваш пароль"
          },
          "placeholder": {
            "email": "Введіть вашу електронну адресу",
            "password": "Введіть ваш пароль"
          },
          "buttons": {
            "confirm": "Увійти"
          },
          "footer": "Розширення ще не активне. Будь ласка, виконайте вхід."
        },
        "scheduling_limit": {
          "heading": "Зачекайте! Уважно прочитайте все це повідомлення!",
          "message": {
            "line1": "Розширення виявило, що веб-сайт обмежив кількість разів, коли ви можете перенести свою зустріч. Хоча розширення все ще може автоматизувати перенесення, ви ризикуєте втратити решту спроб перенесення на небажані дати.",
            "line2": "Якщо ви бажаєте продовжити автоматизацію, розробник наполегливо рекомендує вам вимкнути налаштування автоматичного бронювання, щоб ви могли вручну схвалити нове перенесення.",
            "line3": "Це ваше останнє попередження від розробника."
          },
          "buttons": {
            "confirm": "Я зроблю це вручну",
            "deny": "Автоматизувати"
          }
        },
        "appointments": {
          "heading": "Оберіть ваш запис",
          "message": "У вашому акаунті є кілька записів. Будь ласка, оберіть запис, для якого потрібно виконати скрипт.",
          "buttons": {
            "confirm": "Підтвердити"
          },
          "footer": "Розширення ще не активне. Будь ласка, оберіть правильний запис."
        },
        "side_panel": {
          "heading": "Налаштування переміщено в нову область",
          "message": "Тепер ви можете клацнути правою кнопкою миші будь-де на сторінці та вибрати \"USA Visa Auto Rescheduler\", щоб відкрити налаштування.",
          "buttons": {
            "confirm": "Відкрити налаштування зараз",
            "deny": "Перевірю пізніше"
          }
        },
        "first_appointment": {
          "heading": "Ви не можете використовувати це розширення.",
          "message": "Це розширення вимагає, щоб у вас уже була призначена зустріч на майбутню дату. Якщо у вас немає запису, будь ласка, негайно видаліть розширення.",
          "buttons": {
            "confirm": "OK"
          }
        },
        "frequency": {
          "heading": "Частота перевірок",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "Розширення перевірятиме наявність раніших записів кожні <strong>%minutes% хвилин</strong>",
              "line2": "Щоб змінити частоту, використовуйте налаштування нижче. Ви можете використовувати мишу або ліву \"<\" і праву \">\" стрілки для зміни значення."
            }
          },
          "buttons": {
            "confirm": "Підтвердити"
          },
          "footer": "Розширення ще не активне. Це останній крок перед активацією."
        },
        "init": {
          "heading": "Готово!",
          "asc_type": {
            "false": "за першою доступною датою",
            "true": "найближче до дати візиту"
          },
          "activated": "Розширення тепер активне",
          "message": {
            "string": {
              "line1": "Розширення активовано для <strong>%email%</strong> і використовуватиме дату <strong>%date%</strong> для пошуку раніших записів у місті %city%.",
              "line2": "Розширення запланує ASC-запис у <strong>%ascLocation%</strong> %ascType%.",
              "line3": "Якщо це невірно, будь ласка, припиніть використання розширення та негайно зв’яжіться з розробником. Це повідомлення автоматично закриється через %timer% секунд.",
              "line4": "Ви можете керувати автоматичним бронюванням та параметрами дати запису в налаштуваннях."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "Увага!",
          "message": "Не вдалося визначити дату вашого поточного запису. Будь ласка, введіть дату нижче, щоб продовжити.",
          "err_message": "Будь ласка, введіть правильну дату.",
          "buttons": {
            "confirm": "Підтвердити"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "Увага!",
            "deactivated": "Розширення деактивовано"
          },
          "message": {
            "warning": "Розширення активне в іншій вкладці. Будь-які зміни на цій сторінці вплинуть на розширення. Якщо ви бажаєте продовжити та внести зміни, натисніть кнопку нижче, щоб деактивувати розширення.",
            "deactivated": "Ви можете знову активувати розширення в налаштуваннях. Якщо ви закрили попередню активну вкладку, ця вкладка стане активною."
          },
          "buttons": {
            "warning": {
              "confirm": "Деактивувати"
            },
            "deactivated": {
              "confirm": "Зрозуміло"
            }
          }
        },
        "locations": {
          "heading": "Будь ласка, оберіть",
          "message": {
            "consular": {
              "string": "Поточне місце співбесіди встановлено на <strong>%city%</strong>. Щоб змінити місце, виберіть місто в полі нижче та натисніть підтвердити.",
              "is_dynamic": true
            },
            "asc": {
              "string": "Поточне місце ASC встановлено на <strong>%city%</strong>. Щоб змінити місце, виберіть місто в полі нижче та натисніть підтвердити.",
              "is_dynamic": true
            },
            "asc_type": "Коли ви бажаєте запланувати ASC-запис?"
          },
          "asc_input_options": {
            "false": "Перша доступна дата",
            "true": "Найближче до дати візиту"
          },
          "buttons": {
            "confirm": "Підтвердити"
          },
          "footer": {
            "consular": "Розширення ще не активне. Підтвердіть місце проведення консульської зустрічі.",
            "asc": "Розширення ще не активне. Підтвердіть місце проведення ASC-запису."
          }
        },
        "error": {
          "heading": "Щось тут не так!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "Припиніть надсилати забагато запитів. Розширення призначене для автоматичного перезавантаження сторінки. Це ваше перше попередження. Вам заборонено надсилати запити протягом %seconds% секунд. Повторення призведе до постійної блокування вашого email.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "Ви використовуєте застарілу версію (%oldV%) плагіна. Будь ласка, оновіть до %newV% через магазин розширень Chrome, щоб продовжити використання.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "Ви можете використовувати це розширення лише для %limit% безкоштовних акаунтів кожні 30 днів з цієї IP-адреси <strong>[%ip%]</strong>. Ви можете придбати кредити для попередніх акаунтів або зв’язатися з розробником для інших варіантів. Будь ласка, вкажіть цю IP-адресу в листі.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "Ви не можете використовувати це розширення для перенесення запису в %city%.",
                  "line2": "%reason%",
                  "line3": "Якщо ви реальний користувач, будь ласка, надішліть листа розробнику для розблокування."
                },
                "is_dynamic": true
              },
              "email_banned": "Ваш email заблоковано в цьому розширенні за спам.",
              "ip_banned": "Ваша IP-адреса заблокована назавжди.",
              "invalid_signature": "Ви використовуєте невірне розширення. Будь ласка, завантажте правильне розширення з Chrome Web Store. Натисніть <a href='' target='_blank'>тут</a>, щоб завантажити правильне розширення.",
              "no_email": "Упс. Розширення не змогло визначити ваш email. Будь ласка, оновіть сторінку. Якщо ви бачите цю помилку більше одного разу, припиніть використання плагіна негайно та надішліть листа розробнику.",
              "no_date": "Упс. Розширення не змогло визначити дату вашого поточного запису. Будь ласка, оновіть сторінку. Якщо ви побачите це повідомлення вдруге, спробуйте вийти з облікового запису. Якщо повідомлення з’явиться знову, негайно припиніть використання плагіна та надішліть листа розробнику.",
              "reset_count_reached": "Ви досягли ліміту безкоштовних перезарядок кредитів. Будь ласка, розгляньте можливість купити розробнику каву, щоб отримати необмежену кількість кредитів.",
              "already_paid": "Ви вже оплатили необмежені кредити. Чи все ще бажаєте купити розробнику більше кави?"
            },
            "browser": "Щоб уникнути нескінченного циклу, розширення вимкнеться й вас буде виведено з системи."
          },
          "buttons": {
            "confirm": "OK"
          }
        },
        "credits_exhausted": {
          "heading": "У вас закінчилися кредити!",
          "message": {
            "recharge": {
              "string": {
                "line1": "Ваші кредити для розширення вичерпані. Будь ласка, скористайтеся наведеними нижче опціями для поповнення.",
                "line2": "У вас є <strong>%resets% безкоштовних поповнень.</strong>",
                "line3": "Або ви можете купити розробнику каву, щоб отримати необмежені кредити."
              },
              "is_dynamic": true
            },
            "buy_coffee": "Ваші кредити для розширення вичерпані. Будь ласка, купіть розробнику каву, щоб отримати необмежені кредити.",
            "waiting_for_completion": {
              "string": {
                "line1": "Будь ласка, завершіть донат для %email%.",
                "line2": "Після завершення платежу оновіть цю сторінку. Розширення автоматично оновить ваші кредити."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Безкоштовне поповнення",
            "confirm": "Купити ☕ для розробника"
          }
        }
      },
      "browser_notification": {
        "header": "Знайдено новий запис",
        "message": {
          "string": "Привіт! Розширення знайшло новий запис на %date%. Забронюйте зараз, поки не пізно!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Забронювати",
          "ignore": "Ігнорувати"
        }
      },
      "settings": {
        "inactive": "Ця область відобразиться після активації розширення, входу та завершення всіх поп-ап кроків.",
        "credits": "Залишилося кредитів.",
        "donate": "Купити ☕ для розробника 🙂",
        "unlimited": "Кожен донат дасть вам необмежені кредити.",
        "locale": "Мова розширення",
        "info": "Налаштування для зазначеного запису:",
        "account_email": {
          "is_dynamic": true,
          "string": "Email акаунта: <strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "Зовнішній ID акаунта: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "ID запису: <strong>%appointmentId%</strong>"
        },
        "support": "Для підтримки від розробника, будь ласка, вкажіть Зовнішній ID акаунта та надішліть листа на guduriabhinay@gmail.com. Натисніть тут, щоб <a id=\"send_email\" href=\"#\">написати листа</a>",
        "activate": "Активувати скрипт",
        "autobook": "Авто-бронювання записів",
        "frequency": {
          "is_dynamic": true,
          "string": "Частота перевірок (кожні %frequency% хвилин)"
        },
        "cities": "Місто співбесіди",
        "startDate": "Дата початку",
        "endDate": "Дата завершення",
        "reset": "Скинути все",
        "faqs": "Читати FAQ",
        "updates": "Див. всі оновлення"
      }
    },
    "tr":{
      "toasts": {
        "message": {
          "no_dates_found": "Veri bulunamadı. Bir hata oluşmuş olabilir veya dahili sistem sınırı aşılmış olabilir. Bir sonraki kontrol 30 dakika içinde gerçekleşecektir.",
          "checked_dates": {
            "string": "%start% ve %end% @ %now% arasındaki tarihler kontrol edildi",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "Mevcut randevunuz %date% tarihinde",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "En son kullanılabilirlik: %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "Daha önceki bulunma tarihi: %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "Tarihte zaman dilimi bulunamadı: %date%",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "Bir sonraki kontrol şu konumda olacaktır: %date% in <seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "Başvuru Türü Onayı",
          "message": {
            "line1": "Devam etmek için lütfen Göçmen Vizesine mi yoksa Göçmen Olmayan Vizeye mi başvurduğunuzu seçin.",
            "line2": "Ayrıca, bu uzantı, gelecekteki bir tarihte zaten bir randevunuz olmasını gerektirir. Randevunuz yoksa, lütfen uzantıyı hemen kaldırın."
          },
          "buttons": {
            "confirm": "Göçmen Olmayan Vize",
            "deny": "Göçmen Vizesi"
          }
        },
        "en_lang": {
          "heading": "Dil Onayı",
          "message": {
            "line1": "Bu uzantı, sitenin İngilizce sürümüyle çalışacak şekilde tasarlanmış ve optimize edilmiştir. Bunun nedeni, bir takvim tarihinin farklı dillerde farklı şekillerde yazılmasıdır.",
            "line2": "İngilizce versiyona geçmeniz şiddetle tavsiye edilir."
          },
          "buttons": {
            "confirm": "İngilizce'ye geç",
            "deny": "Geçiş yapmayın"
          }
        },
        "country_limit": {
          "heading": "Desteklenen Ülkeler",
          "message": {
            "line1": "Bu sayfada ülkeyi görmüyorsanız <em>(ör. Hindistan, Pakistan),</em> bu uzantı size göre değildir. Geliştirici bu konuda hiçbir şey yapamaz. Pardon.",
            "line2": "Devam etmek için lütfen ülkenizi seçin"
          },
          "buttons": {
            "confirm": "Tamam"
          }
        },
        "ext_usage": {
          "heading": "Uzantı Kullanım Yönergeleri",
          "message": {
            "line1": "Bu uzantı, halihazırda randevusu olan ve randevu tarihlerini öne çekmek isteyen kişiler tarafından kullanılmak üzere tasarlanmıştır.",
            "line2": "Bazı büyükelçiliklerin yeniden planlama sayınızı sınırladığına dair raporlar var. Bunu en aza indirmek için uzantı, belirli bir tarih aralığındaki yuvaları kontrol etmenize olanak tanır.",
            "line3": "Bu web sitesinden yalnızca belirli sayıda yeniden planlayabileceğinizi bildiren bir mesaj görürseniz, uzantıyı kullanmayı bırakmanız önerilir. Geliştirici, bu uyarıyı gördükten sonra herhangi bir serpintiden sorumlu olmayacaktır."
          },
          "buttons": {
            "confirm": "Bu uzantıyı sınırları dahilinde kullanmayı kabul ediyorum"
          }
        },
        "update": {
          "heading": "Güncelleştirme",
          "message": {
            "line1": "Uzantının bu sürümü, sıfırlamak zorunda kalmadan şehrinizi değiştirmenize olanak tanır.",
            "line2": "Bu sürümdeki güncellemeleri görmek için <b>Güncellemeleri Gör</b> düğmesine tıklayın."
          },
          "buttons": {
            "confirm": "Atlamak",
            "cancel": "Güncellemeleri Gör"
          }
        },
        "login": {
          "heading": "Kimlik bilgilerinizi girin",
          "message": "Lütfen Vize başvurunuz için e-posta ve şifreyi girin. Uzantı, oturumu kapattıysanız oturum açmak için bunu kullanacaktır. Tüm detaylar gizli ve korunmalıdır.",
          "error": "Geçersiz e-posta veya şifre",
          "label": {
            "email": "E-posta adresiniz",
            "password": "Şifreniz"
          },
          "placeholder": {
            "email": "E-posta adresinizi girin",
            "password": "Şifrenizi girin"
          },
          "buttons": {
            "confirm": "Oturum aç"
          },
          "footer": "Uzantı henüz etkin değil. Lütfen oturum açma işlemini tamamlayın."
        },
        "scheduling_limit": {
          "heading": "Bekleyin! Bu mesajın tamamını dikkatlice okuyun!",
          "message": {
            "line1": "Eklenti, web sitesinin randevunuzu bundan sonra kaç kez yeniden planlayabileceğinizi sınırladığını tespit etti. Ek, yeniden planlamayı otomatikleştirebilse de, istemediğiniz tarihler için kalan yeniden planlama denemelerinizi kaybetme riskiyle karşı karşıya kalırsınız.",
            "line2": "Otomasyona devam etmek istiyorsanız, geliştirici otomatik rezervasyon ayarını kapatmanızı şiddetle tavsiye eder, böylece yeni yeniden planlamayı manuel olarak onaylayabilirsiniz.",
            "line3": "Bu, geliştiriciden aldığınız son uyarıdır."
          },
          "buttons": {
            "confirm": "Manuel olarak yapacağım",
            "deny": "Otomatikleştir"
          }
        },
        "appointments": {
          "heading": "Randevunuzu seçin",
          "message": "Hesabınızda birden fazla randevu var. Lütfen komut dosyasını çalıştırmak istediğiniz randevuyu seçin.",
          "buttons": {
            "confirm": "Onaylamak"
          },
          "footer": "Uzantı henüz etkin değil. Lütfen doğru randevuyu seçiniz."
        },
        "side_panel": {
          "heading": "Ayarlar yeni bir alana taşındı",
          "message": "Artık ayarlara erişmek için sayfada herhangi bir yere sağ tıklayabilir ve <b>USA Visa Auto Rescheduler</b> seçebilirsiniz.",
          "buttons": {
            "confirm": "Ayarları şimdi aç",
            "deny": "Daha sonra kontrol edeceğim"
          }
        },
        "first_appointment": {
          "heading": "Bu uzantıyı kullanamazsınız.",
          "message": "Bu uzantı, gelecekteki bir tarihte zaten bir randevunuz olmasını gerektirir. Randevunuz yoksa, lütfen dahili numarayı hemen kaldırın.",
          "buttons": {
            "confirm": "TAMAM"
          }
        },
        "frequency": {
          "heading": "Kontrollerin sıklığı",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "Uzantı, her <strong>%minutes% dakikada</strong> bir daha önceki randevuları kontrol edecektir",
              "line2": "Frekansı değiştirmek isterseniz lütfen aşağıdaki ayarları değiştirin. Değeri değiştirmek için farenizi veya sol '<' ve sağ '>' oklarını kullanabilirsiniz."
            }
          },
          "buttons": {
            "confirm": "Onaylamak"
          },
          "footer": "Uzantı henüz etkin değil. Bu, uzantı etkinleştirilmeden önceki son adımdır."
        },
        "init": {
          "heading": "Her şey hazır!",
          "asc_type": {
            "false": "ilk müsait tarihte",
            "true": "VİZE randevusuna en yakın"
          },
          "activated": "Uzantı şimdi etkinleştirildi",
          "message": {
            "string": {
              "line1": "Uzantı <strong>%email%</strong> için etkinleştirilir ve %city% içinde daha önceki randevuları bulmak için <strong>%date%</strong> tarihini kullanır.",
              "line2": "Uzantı, <strong>ASC randevusunu %ascLocation%</strong> %ascType% içinde zamanlar.",
              "line3": "Bu doğru değilse, lütfen uzantıyı kullanmayı bırakın ve hemen geliştiriciyle iletişime geçin. Bu mesaj %timer% saniye içinde otomatik olarak kapanacaktır.",
              "line4": "Ayarlar alanında otomatik defter ve randevu tarihi seçeneklerini yönetebilirsiniz."
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "Lütfen dikkat!",
          "message": "Mevcut randevu tarihiniz algılanmadı. Devam etmek için lütfen aşağıya tarihi girin.",
          "err_message": "Lütfen doğru tarihi giriniz.",
          "buttons": {
            "confirm": "Onaylamak"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "Lütfen dikkat!",
            "deactivated": "Uzantı devre dışı bırakıldı"
          },
          "message": {
            "warning": "Uzantı başka bir sekmede etkindir. Bu sayfada yaptığınız herhangi bir değişiklik uzantıyı etkileyecektir. Bu sayfada değişiklik yapmaya devam etmek isterseniz, uzantıyı devre dışı bırakmak için aşağıdaki düğmeyi tıklayın.",
            "deactivated": "Uzantıyı ayarlar alanından tekrar etkinleştirebilirsiniz. Daha önce aktif olan sekmeyi kapattıysanız, mevcut sekme aktif sekme haline gelecektir."
          },
          "buttons": {
            "warning": {
              "confirm": "Devre dışı bırakmak"
            },
            "deactivated": {
              "confirm": "Anlaşıldı"
            }
          }
        },
        "locations": {
          "heading": "Lütfen seçiniz",
          "message": {
            "consular": {
              "string": "Geçerli mülakat konumunuz <strong>%city%</strong> olarak ayarlanmıştır. Konumunuzu değiştirmek için aşağıdaki kutudan şehri seçin ve gönderin.",
              "is_dynamic": true
            },
            "asc": {
              "string": "Geçerli ASC konumunuz <strong>%city%</strong> olarak ayarlanmıştır. Konumunuzu değiştirmek için aşağıdaki kutudan şehri seçin ve gönderin.",
              "is_dynamic": true
            },
            "asc_type": "ASC randevunuzu ne zaman planlamak istersiniz?"
          },
          "asc_input_options": {
            "false": "İlk müsaitlik tarihi",
            "true": "VISA randevusuna en yakın"
          },
          "buttons": {
            "confirm": "Onaylamak"
          },
          "footer": {
            "consular": "Uzantı henüz etkin değil. Konsolosluk Randevunuzun yerini onaylayın.",
            "asc": "Uzantı henüz etkin değil. ASC Randevunuzun konumunu onaylayın."
          }
        },
        "error": {
          "heading": "Burada bir şeyler yanlış!",
          "message": {
            "server": {
              "stop_spam": {
                "string": "İsteklere spam göndermeyi bırakın. Uzantı, web sayfasını kendi başına yeniden yüklemek için tasarlanmıştır. Bu sizin ilk uyarınız. %seconds% saniye için zaman aşımına uğradınız. Bunun tekrarı, e-postanızın kalıcı hale gelmesine neden olur.",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "Eklentinin eski bir sürümü olan %oldV% kullanıyorsunuz. Kullanmaya devam etmek için lütfen chrome uzantı mağazasını kullanarak %newV%'ye güncelleyin.",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "Bu uzantıyı yalnızca bu IP'den <strong>[%ip%]</strong> her 30 günde bir %limit% ücretsiz hesaplar için kullanabilirsiniz. Önceki hesaplar için kredi satın alabilir veya diğer seçenekler için geliştiriciyle iletişime geçebilirsiniz. Lütfen bu IP'yi e-postada belirtin.",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "%city%'de yeniden planlama için bu uzantıyı kullanamazsınız.",
                  "line2": "%reason%",
                  "line3": "Gerçek bir kullanıcıysanız, kilidi açmak için lütfen geliştiriciye bir e-posta gönderin."
                },
                "is_dynamic": true
              },
              "email_banned": "E-postanız spam nedeniyle bu uzantıdan yasaklandı.",
              "ip_banned": "IP'niz kalıcı olarak yasaklanmıştır. Pound kum.",
              "invalid_signature": "Geçersiz bir uzantı kullanıyorsunuz. Lütfen Chrome Web Mağazası'ndan doğru uzantıyı indirin. Doğru uzantıyı indirmek için <a href='' target='_blank'> buraya tıklayın</a>.",
              "no_email": "Oops. Uzantı e-postanızı tanımlamadı. Lütfen sayfayı yenileyiniz. Bu hatayı birden fazla kez görüyorsanız, lütfen eklentiyi kullanmayı hemen bırakın ve geliştiriciye bir e-posta gönderin.",
              "no_date": "Oops. Uzantı, mevcut randevu tarihinizi tanımlamadı. Lütfen sayfayı yenileyiniz. İletiyi ikinci kez görürseniz oturumu kapatmayı deneyin. Hala bu mesajı görüyorsanız, eklentiyi kullanmayı hemen bırakın ve geliştiriciye bir e-posta gönderin.",
              "reset_count_reached": "Ücretsiz kredi yüklemeleri sınırına ulaştınız. Sınırsız kredi almak için lütfen geliştiriciye bir kahve ısmarlamayı düşünün.",
              "already_paid": "Zaten sınırsız kredi için ödeme yaptınız. Yine de geliştiriciye daha fazla kahve ısmarlamak istiyor musunuz?"
            },
            "browser": "Sonsuz bir döngüyü önlemek için, uzantı kendini kapatacak ve şimdi oturumunuzu kapatacaktır."
          },
          "buttons": {
            "confirm": "TAMAM"
          }
        },
        "credits_exhausted": {
          "heading": "Krediniz bitti!",
          "message": {
            "recharge": {
              "string": {
                "line1": "Uzatma için krediniz tükendi. Şarj etmek için lütfen aşağıdaki seçenekleri kullanın.",
                "line2": "<strong>%resets% ücretsiz şarjınız var.</strong>",
                "line3": "Alternatif olarak, sınırsız kredi almak için geliştiriciye bir kahve ısmarlayabilirsiniz."
              },
              "is_dynamic": true
            },
            "buy_coffee": "Uzatma için krediniz tükendi. Sınırsız kredi almak için lütfen geliştiriciye bir kahve ısmarlayın.",
            "waiting_for_completion": {
              "string": {
                "line1": "Lütfen %email% için bağışı tamamlayın.",
                "line2": "Ödemeyi tamamladıktan sonra lütfen bu sayfayı yenileyin. Uzatma, kredilerinizi otomatik olarak güncelleyecektir."
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "Ücretsiz Şarj",
            "confirm": "Geliştirici için satın alın ☕"
          }
        }
      },
      "browser_notification": {
        "header": "Yeni Randevu Bulundu",
        "message": {
          "string": "Selam. Uzantı %date% tarihinde yeni bir randevu buldu. Tükenmeden hemen rezervasyon yapın!",
          "is_dynamic": true
        },
        "buttons": {
          "book": "Kitap",
          "ignore": "Yok saymak"
        }
      },
      "settings": {
        "inactive": "Bu alan, uzantıyı etkinleştirdiğinizde ve oturum açma işlemini tamamladığınızda ve tüm açılır adımları tamamladığınızda görüntülenecektir.",
        "credits": "Kredi kaldı.",
        "donate": "Geliştirici için satın 🙂 alın ☕",
        "unlimited": "Herhangi bir bağış size sınırsız kredi kazandıracaktır.",
        "locale": "Uzantı dili",
        "info": "Ayarlar aşağıdaki randevu içindir:",
        "account_email": {
          "is_dynamic": true,
          "string": "Hesap <strong>E-postası: %email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "Hesap Dahili Kimliği: <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "Randevu Kimliği: <strong>%appointmentId%</strong>"
        },
        "support": "Geliştiriciden herhangi bir destek için lütfen Hesap Dahili Kimliğini sağlayın ve guduriabhinay@gmail.com bir e-posta gönderin. <a id=\"send_email\" href=\"#\"> e-posta göndermek için buraya tıklayın</a>",
        "activate": "Komut dosyasını etkinleştirin",
        "autobook": "Otomatik rezervasyon randevuları",
        "frequency": {
          "is_dynamic": true,
          "string": "Kontrollerin sıklığı (her %frequency% dakika)"
        },
        "cities": "Röportaj için şehir",
        "startDate": "Başlangıç Tarihi",
        "endDate": "Bitiş Tarihi",
        "reset": "Her Şeyi Sıfırla",
        "faqs": "SSS'leri okuyun",
        "updates": "Tüm güncellemeleri görün"
      }
    },
    "zh":{
      "toasts": {
        "message": {
          "no_dates_found": "未找到数据。可能发生错误或超出内部系统限制。下次检查将在 30 分钟后进行。",
          "checked_dates": {
            "string": "检查日期在 %start% 和 %end% @ %now% 之间",
            "is_dynamic": true
          },
          "current_appt_date": {
            "string": "您当前的预约在 %date%",
            "is_dynamic": true
          },
          "latest_availability": {
            "string": "最新可用性： %date%",
            "is_dynamic": true
          },
          "latest_date_found": {
            "string": "找到较早的日期： %date%",
            "is_dynamic": true
          },
          "no_slot_found": {
            "string": "在日期 %date% 未找到时间槽",
            "is_dynamic": true
          },
          "next_check_at": {
            "string": "下一次检查将在以下位置进行：%date%<seconds></seconds>",
            "is_dynamic": true
          }
        }
      },
      "alerts": {
        "imig_type": {
          "heading": "应用程序类型确认",
          "message": {
            "line1": "请选择您申请的是移民签证还是非移民签证以继续。",
            "line2": "此外，此延期要求您已经预约了未来的日期。如果您没有预约，请立即卸载扩展程序。"
          },
          "buttons": {
            "confirm": "非移民签证",
            "deny": "移民签证"
          }
        },
        "en_lang": {
          "heading": "语言确认",
          "message": {
            "line1": "此扩展经过设计和优化，可与网站的英文版本配合使用。这是因为日历日期用不同语言书写的方式不同。",
            "line2": "强烈建议切换到英文版本。"
          },
          "buttons": {
            "confirm": "切换到 简体中文",
            "deny": "不要切换"
          }
        },
        "country_limit": {
          "heading": "支持的国家",
          "message": {
            "line1": "如果您在此页面上没有看到国家/地区<em>（例如：印度、巴基斯坦），</em>则此扩展不适合您。开发人员对此无能为力。不好意思。",
            "line2": "请选择您所在的国家/地区以继续"
          },
          "buttons": {
            "confirm": "还行"
          }
        },
        "ext_usage": {
          "heading": "扩展使用指南",
          "message": {
            "line1": "此延期旨在供已经预约并希望提前预约日期的个人使用。",
            "line2": "有报道称，某些大使馆限制了您可以重新安排的时间。为了最大限度地减少这种情况，该扩展允许您检查特定日期范围内的广告位。",
            "line3": "如果您看到来自此网站的消息，通知您只能重新安排一定次数，建议停止使用该扩展程序。开发人员将不对您看到该警告后的任何后果负责。"
          },
          "buttons": {
            "confirm": "我同意在其限制范围内使用此扩展"
          }
        },
        "update": {
          "heading": "更新",
          "message": {
            "line1": "此版本的扩展程序允许您更改您的城市而无需重置。",
            "line2": "单击 <b>See Updates</b> 按钮查看此版本中的更新。"
          },
          "buttons": {
            "confirm": "跳",
            "cancel": "查看更新"
          }
        },
        "login": {
          "heading": "输入您的凭据",
          "message": "请提供用于签证申请的电子邮件和密码。如果您已注销，扩展程序将使用此 URL 登录。所有细节均保密且受到保护。",
          "error": "无效的电子邮件或密码",
          "label": {
            "email": "您的电子邮件地址",
            "password": "您的密码"
          },
          "placeholder": {
            "email": "输入您的电子邮件地址",
            "password": "输入您的密码"
          },
          "buttons": {
            "confirm": "登录"
          },
          "footer": "扩展尚未激活。请完成登录。"
        },
        "scheduling_limit": {
          "heading": "等等！请仔细阅读完整消息！",
          "message": {
            "line1": "扩展程序检测到网站已限制您未来重新安排预约的次数。虽然扩展程序仍可自动重新安排预约，但您可能会失去剩余的重新安排次数，无法重新安排您不希望的日期。",
            "line2": "如果您希望继续使用自动重新安排功能，开发者强烈建议您关闭自动预订设置，以便您可以手动批准新的重新安排。",
            "line3": "这是开发者给您的最后警告。"
          },
          "buttons": {
            "confirm": "我将手动操作",
            "deny": "自动操作"
          }
        },
        "appointments": {
          "heading": "选择您的预约",
          "message": "您的帐户中有多个预约。请选择要为其运行脚本的约会。",
          "buttons": {
            "confirm": "确认"
          },
          "footer": "扩展尚未激活。请选择正确的预约。"
        },
        "side_panel": {
          "heading": "设置已移至新区域",
          "message": "现在，您可以右键单击页面上的任意位置，然后选择 <b>USA Visa Auto Rescheduler</b> 以访问设置。",
          "buttons": {
            "confirm": "立即打开设置",
            "deny": "我稍后会检查"
          }
        },
        "first_appointment": {
          "heading": "您不能使用此扩展。",
          "message": "此延期要求您已经在未来的日期有预约。如果您没有预约，请立即取消延期。",
          "buttons": {
            "confirm": "还行"
          }
        },
        "frequency": {
          "heading": "检查频率",
          "message": {
            "is_dynamic": true,
            "string": {
              "line1": "该分机将每 <strong>%minutes% 分钟</strong>检查一次较早的预约",
              "line2": "如果您想更改频率，请更改以下设置。您可以使用鼠标或左 '<' 和右 '>' 箭头来更改该值。"
            }
          },
          "buttons": {
            "confirm": "确认"
          },
          "footer": "扩展尚未激活。这是激活扩展之前的最后一步。"
        },
        "init": {
          "heading": "一切就绪！",
          "asc_type": {
            "false": "在最早可订日期",
            "true": "最接近 VISA 预约"
          },
          "activated": "扩展现已激活",
          "message": {
            "string": {
              "line1": "该扩展已为 <strong>%email%</strong> 激活，并将使用日期 <strong>%date%</strong> 在 %city% 中查找较早的约会。",
              "line2": "分机将在 <strong>%ascLocation%</strong> %ascType% 中安排 ASC 预约。",
              "line3": "如果不正确，请停止使用该扩展并立即联系开发者。此消息将在 %timer% 秒后自动关闭。",
              "line4": "您可以在设置区域中管理自动预订和预约日期选项。"
            },
            "is_dynamic": true
          }
        },
        "date_not_detected": {
          "heading": "请注意！",
          "message": "未检测到您当前的预约日期。请在下面输入日期以继续。",
          "err_message": "请输入正确的日期。",
          "buttons": {
            "confirm": "确认"
          }
        },
        "duplicate_tab": {
          "heading": {
            "warning": "请注意！",
            "deactivated": "扩展已停用"
          },
          "message": {
            "warning": "该扩展在另一个选项卡上处于活动状态。您在此页面上所做的任何更改都将影响扩展。如果您希望继续更改此页面，请单击下面的按钮以停用该扩展。",
            "deactivated": "您可以从设置区域再次激活该扩展。如果您关闭了之前活动的选项卡，则当前选项卡将成为活动选项卡。"
          },
          "buttons": {
            "warning": {
              "confirm": "关闭"
            },
            "deactivated": {
              "confirm": "理解"
            }
          }
        },
        "locations": {
          "heading": "请选择",
          "message": {
            "consular": {
              "string": "您当前的面试地点设置为 <strong>%city%。</strong>要更改您的位置，请在下面的框中选择城市并提交。",
              "is_dynamic": true
            },
            "asc": {
              "string": "您当前的 ASC 位置设置为 <strong>%city%。</strong>要更改您的位置，请在下面的框中选择城市并提交。",
              "is_dynamic": true
            },
            "asc_type": "您想何时安排 ASC 预约？"
          },
          "asc_input_options": {
            "false": "首次上架日期",
            "true": "最接近 VISA 预约"
          },
          "buttons": {
            "confirm": "确认"
          },
          "footer": {
            "consular": "扩展尚未激活。确认您的领事预约地点。",
            "asc": "扩展尚未激活。确认您的 ASC 预约地点。"
          }
        },
        "error": {
          "heading": "这里出了点问题！",
          "message": {
            "server": {
              "stop_spam": {
                "string": "停止发送垃圾邮件请求。该扩展旨在自行重新加载网页。这是您的第一次警告。超时 %seconds% 秒。重复此操作将导致您的电子邮件永久封禁。",
                "is_dynamic": true
              },
              "outdated_version": {
                "string": "您使用的是过时的版本 %oldV% 的插件。请使用 chrome 扩展商店更新到 %newV% 以继续使用它。",
                "is_dynamic": true
              },
              "ip_limit": {
                "string": "您只能将此扩展用于此 IP <strong>[%ip%]</strong> 每 30 天的 %limit% 免费帐户。您可以为以前的帐户购买积分，也可以联系开发人员以获取其他选项。请在电子邮件中提及此 IP。",
                "is_dynamic": true
              },
              "city_banned": {
                "string": {
                  "line1": "您无法使用此扩展在 %city% 中重新安排时间。",
                  "line2": "%reason%",
                  "line3": "如果您是真正的用户，请发送电子邮件给开发者进行解锁。"
                },
                "is_dynamic": true
              },
              "email_banned": "您的电子邮件因垃圾邮件而被禁止使用此扩展程序。",
              "ip_banned": "您的 IP 被永久禁止。磅沙。",
              "invalid_signature": "您正在使用无效的扩展。请从 Chrome Web Store 下载正确的扩展。点击 <a href='' target='_blank'>here</a> 下载正确的扩展。",
              "no_email": "哎呀。该扩展程序无法识别您的电子邮件。请刷新页面。如果您多次看到此错误，请立即停止使用该插件并向开发人员发送电子邮件。",
              "no_date": "哎呀。延期未确定您当前的预约日期。请刷新页面。如果您第二次看到此消息，请尝试注销。如果您仍然看到此消息，请立即停止使用该插件并向开发人员发送电子邮件。",
              "reset_count_reached": "您已达到免费信用充值的上限。请考虑为开发人员买一杯咖啡以获得无限积分。",
              "already_paid": "您已经支付了无限积分的费用。您还想向开发商购买更多咖啡吗？"
            },
            "browser": "为防止无限循环，扩展程序将自行关闭并立即注销您。"
          },
          "buttons": {
            "confirm": "还行"
          }
        },
        "credits_exhausted": {
          "heading": "您的积分已用完！",
          "message": {
            "recharge": {
              "string": {
                "line1": "您的扩展积分已用完。请使用以下选项进行充值。",
                "line2": "您有 <strong>%resets% 免费充值。</strong>",
                "line3": "或者，您可以向开发人员购买咖啡以获得无限积分。"
              },
              "is_dynamic": true
            },
            "buy_coffee": "您的扩展积分已用完。请为开发人员买一杯咖啡以获得无限积分。",
            "waiting_for_completion": {
              "string": {
                "line1": "请完成 %email% 的捐款。",
                "line2": "完成付款后，请刷新此页面。该扩展将自动更新您的积分。"
              },
              "is_dynamic": true
            }
          },
          "buttons": {
            "deny": "免费充值",
            "confirm": "为开发人员购买 ☕"
          }
        }
      },
      "browser_notification": {
        "header": "找到新预约",
        "message": {
          "string": "嘿，你好。该扩展在 %date% 上找到了新的约会。在它消失之前立即预订！",
          "is_dynamic": true
        },
        "buttons": {
          "book": "书",
          "ignore": "忽视"
        }
      },
      "settings": {
        "inactive": "激活扩展并完成登录并完成所有弹出步骤后，将显示此区域。",
        "credits": "留下学分。",
        "donate": "为开发人员🙂购买 ☕",
        "unlimited": "任何捐赠都将为您带来无限的积分。",
        "locale": "扩展语言",
        "info": "这些设置适用于以下预约：",
        "account_email": {
          "is_dynamic": true,
          "string": "帐户电子邮件：<strong>%email%</strong>"
        },
        "account_ext_id": {
          "is_dynamic": true,
          "string": "帐户分机 ID： <strong>%extId%</strong>"
        },
        "appointment_id": {
          "is_dynamic": true,
          "string": "预约 ID： <strong>%appointmentId%</strong>"
        },
        "support": "如需开发者提供任何支持，请提供帐户分机 ID 并发送电子邮件至 guduriabhinay@gmail.com。单击此处<a id=\"send_email\" href=\"#\">发送电子邮件</a>",
        "activate": "激活脚本",
        "autobook": "自动预订预约",
        "frequency": {
          "is_dynamic": true,
          "string": "检查频率（每 %frequency% 分钟）"
        },
        "cities": "面试城市",
        "startDate": "开始日期",
        "endDate": "结束日期",
        "reset": "重置一切",
        "faqs": "阅读常见问题解答",
        "updates": "查看所有更新"
      }
    }
        }
        const { languageCode } = req.params as { languageCode: string };

        if (languageCode in languages) {
        return res.status(200).json(languages[languageCode as keyof typeof languages]);
    }

    return res.status(404).send("Language not found");
    

    }catch(error){
        res.status(500)
        next(error);
    }
}