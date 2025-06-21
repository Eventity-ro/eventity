const questions = [
    {
        question: "Cât costă abonamentul pentru platforma de admin?",
        answer: "Abonamentul este gratuit pentru toate utilizatorii de pe platformă, dar pentru serviciile de rezervare, oferte, detalii servicii etc. este necesar un abonament pentru utilizatorii din afara platformei.",
    },
    {
        question: "Pot să înregistrez mai multe servicii sub același cont?",
        answer: "Intregul proces de creare a unui serviciu este completat de un singur utilizator, deci pot fi creat mai multe servicii sub acelasi cont.",
    },
    {
        question: "Poate un utilizator să rezerve direct din aplicație?",
        answer: "Nu, un utilizator nu poate rezerva direct din aplicație, acest lucru trebuie facut telefonic după ce clientul consideră ceea ce oferiți se pliază pe pretențile si nevoile lor.",
    },
]

export default function FAQSection() {
    return (
        <section className="py-12 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Întrebări frecvente</h2>
            {questions.map((question, idx) => (
                <details key={idx} className="mb-4 border-b">
                    <summary className="cursor-pointer px-4 py-3 font-medium">
                        {question.question}
                    </summary>
                    <div className="px-4 py-2 text-sm text-gray-600">{question.answer}</div>
                </details>
            ))}
        </section>
    );
}
