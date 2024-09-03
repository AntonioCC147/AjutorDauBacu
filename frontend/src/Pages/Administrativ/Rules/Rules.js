import Template from "../Template"

export default function Rules() {
    return (
        <Template 
            title={"Regulament"}
            text={
                <>
                    <b>1. Prezentare generală:</b><br/>
                    <span class="indent">1.1.</span> Simularea are ca scop verificarea cunoștințelor elevilor de clasa a 11-a și
                        a 12-a care urmează să susțină examenul de bacalaureat.
                    <br/>
                    <span class="indent">1.2.</span> Subiectele date la simulare respectă programa oficială și sunt concepute după
                        același model propus de Ministerul Educației.
                    <br/><br/>
                    <b>2. Conectarea la întâlnire:</b><br/>
                    <span class="indent">2.1.</span> În ziua desfășurării concursului, pentru conectare, participantul are nevoie
                        de un dispozitiv (Laptop / PC) cu cameră web și microfon funcționale, având o conexiune stabilă de Internet.
                    <br/>
                    <span class="indent">2.2.</span> Participanții vor primi link-ul de conectare la întâlnirea online pe adresa
                        de email folosită la înscriere, în jurul orei 9:00 și se vor putea conecta în intervalul orar 9:30 - 10:00.
                    <br/><br/>
                    <b>3. Desfășurarea probei:</b><br/>
                    <span class="indent">3.1.</span> Link-ul către subiecte va fi postat pe chat-ul întâlnirii la ora 10:00.
                    <br/>
                    <span class="indent">3.2.</span> Participanții vor avea 3 ore să rezolve subiectele.
                    <br/>
                    <span class="indent">3.3.</span> Participanții vor putea să trimită rezolvarea subiectelor o singură dată în
                        intervalul orar 11:30 - 13:30. Orice rezolvare trimisă în afara acestui interval orar nu va fi luată în
                        considerare.
                    <br/>
                    <span class="indent">3.4.</span> Pentru a trimite rezolvarea subiectelor, participanții vor numerota și
                        scana în ordine fiecare foaie pe care au redactat rezolvarea subiectelor (fără ciorne) și o vor încărca
                        în formularul de răspuns primit în timpul simulării.
                    <br/>
                    <span class="indent">3.5.</span> Participanții vor ține camera pornită și microfonul închis pe parcursul
                        desfășurării probei. În situația în care supraveghetorii identifică un comportament anormal al
                        participantului, vor solicita explicații de la acesta.
                    <br/>
                    <span class="indent">3.6.</span> Participanții pot trimite rezolvarea subiectelor o singură dată. După
                        trimitere, formularul pentru răspunsuri se va închide și nu vor mai putea trimite alte rezolvări.
                    <br/>
                    <span class="indent">3.7.</span>  Participanții vor primi rezultatele (nota obținută și poziția în clasament)
                        în termen de maxim 10 zile după data simulării.
                    <br/><br/>
                    <b>4. Pedepsirea tentativelor de fraudă:</b><br/>
                    <span class="indent">4.1.</span> Orice tentativă de fraudă (folosirea oricăror mijloace electronice pentru
                        rezolvarea subiectelor, ajutorul primit de la alte persoane sau folosirea oricăror materiale ajutătoare),
                        precum și orice gest care ridică suspiciuni (participantul ține camera închisă, nu răspunde la întrebările
                        supraveghetorilor), vor duce la eliminarea din concurs, fără posibilitatea de restituire a plății.
                    <br/><br/>
                    <b>5. Dispoziții finale:</b><br/>
                    <span class="indent">5.1.</span> Participarea la acest concurs este benevolă și implică acceptarea irevocabilă
                        și necondiționată a prevederilor prezentului Regulament și obligativitatea respectării acestora.
                </>
            }
        />
    )
}