export default function SuccessPage() {
    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-2xl text-center">
            <img src="/success-icon.svg" alt="Success" className="mx-auto mb-4 w-16 h-16"/>
            <h2 className="text-xl font-bold mb-2">Cererea de înregistrare a fost trimisă</h2>
            <p className="text-gray-600">
                Vă mulțumim pentru încredere! Revenim în cel mult 24 de ore pe email cu următorii pași.
            </p>
        </div>
    );
}
