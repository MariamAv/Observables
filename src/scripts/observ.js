import { Observable, Subject, BehaviorSubject, ReplaySubject } from "rxjs";

//observable
let observable = new Observable(observer =>
  observer.next("coucou de l'observable")
);
let subscription = observable.subscribe(data => console.log(data));
subscription.unsubscribe();

//subject
let subject = new Subject();
subject.next("coucou du subject");
// subject.next('coucou 2 du subject')
let subscription2 = subject.subscribe(data => console.log(data));
// subject.next('coucou 3 du subject')
subscription2.unsubscribe();

//behavior subject
let behaviorSubject = new BehaviorSubject("valeur initale du bs");
behaviorSubject.next("coucou du Bsubject");
behaviorSubject.next("coucou 2 du Bsubject");
let subscription3 = behaviorSubject.subscribe(data => console.log(data));
behaviorSubject.next("coucou 3 du subject");
subscription3.unsubscribe();

//replay subject
let replaySubject = new ReplaySubject(2);
replaySubject.next("coucou du Rsubject");
replaySubject.next("coucou 2 du Rsubject");
replaySubject.next("coucou 3 du Rsubject");
replaySubject.next("coucou 4 du Rsubject");
let subscription4 = replaySubject.subscribe(data => console.log(data));
subscription4.unsubscribe();
