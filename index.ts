// -*- mode: typescript -*-
/**
 * @fileoverview
 * @author Taketoshi Aono
 */

import {
  Subscription,
  Observable
} from 'rxjs/Rx';


type Pattern<R, V> = (acc: R, value, V) => R;


export function update<R, A1>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R): Observable<R>;
export function update<R, A1, A2>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R): Observable<R>;
export function update<R, A1, A2, A3>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R, ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R): Observable<R>;
export function update<R, A1, A2, A3, A4>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R, ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R, ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R): Observable<R>;
export function update<R, A1, A2, A3, A4, A5>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R, ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R, ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R, ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R, ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R, ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R, ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R, ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R, ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R, ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R, ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R, ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R, ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7, A8>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R, ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R, ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R, ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R, ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R, ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R, ob8: Observable<A8>, pattern8: Pattern<R, A8>): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7, A8, A9>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R, ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R, ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R, ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R, ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R, ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R, ob8: Observable<A8>, pattern8: Pattern<R, A8>, ob9: Observable<A9>, pattern9: Pattern<R, A9>): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(initial: R, ob1: Observable<A1>, pattern: (acc: R, value: A1) => R, ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R, ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R, ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R, ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R, ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R, ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R, ob8: Observable<A8>, pattern8: Pattern<R, A8>, ob9: Observable<A9>, pattern9: Pattern<R, A9>, ob10: Observable<A10>, pattern10: Pattern<R, A10>): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11>(
  initial: R,
  ob1: Observable<A1>, pattern: (acc: R, value: A1) => R,
  ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R,
  ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R,
  ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R,
  ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R,
  ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R,
  ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R,
  ob8: Observable<A8>, pattern8: Pattern<R, A8>,
  ob9: Observable<A9>, pattern9: Pattern<R, A9>,
  ob10: Observable<A10>, pattern10: Pattern<R, A10>,
  ob11: Observable<A11>, pattern11: Pattern<R, A11>): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12>(
  initial: R,
  ob1: Observable<A1>, pattern: (acc: R, value: A1) => R,
  ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R,
  ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R,
  ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R,
  ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R,
  ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R,
  ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R,
  ob8: Observable<A8>, pattern8: Pattern<R, A8>,
  ob9: Observable<A9>, pattern9: Pattern<R, A9>,
  ob10: Observable<A10>, pattern10: Pattern<R, A10>,
  ob11: Observable<A11>, pattern11: Pattern<R, A11>,
  ob12: Observable<A12>, pattern12: Pattern<R, A12>
): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13>(
  initial: R,
  ob1: Observable<A1>, pattern: (acc: R, value: A1) => R,
  ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R,
  ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R,
  ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R,
  ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R,
  ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R,
  ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R,
  ob8: Observable<A8>, pattern8: Pattern<R, A8>,
  ob9: Observable<A9>, pattern9: Pattern<R, A9>,
  ob10: Observable<A10>, pattern10: Pattern<R, A10>,
  ob11: Observable<A11>, pattern11: Pattern<R, A11>,
  ob12: Observable<A12>, pattern12: Pattern<R, A12>,
  ob13: Observable<A13>, pattern13: Pattern<R, A13>
): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14>(
  initial: R,
  ob1: Observable<A1>, pattern: (acc: R, value: A1) => R,
  ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R,
  ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R,
  ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R,
  ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R,
  ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R,
  ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R,
  ob8: Observable<A8>, pattern8: Pattern<R, A8>,
  ob9: Observable<A9>, pattern9: Pattern<R, A9>,
  ob10: Observable<A10>, pattern10: Pattern<R, A10>,
  ob11: Observable<A11>, pattern11: Pattern<R, A11>,
  ob12: Observable<A12>, pattern12: Pattern<R, A12>,
  ob13: Observable<A13>, pattern13: Pattern<R, A13>,
  ob14: Observable<A14>, pattern14: Pattern<R, A14>
): Observable<R>;
export function update<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16,
A17, A18, A19, A20, A21, A22, A23, A24, 
A25, A26, A27, A28, A29, A30, A31, A32, A33, A34, A35, A36, A37, A38, A39, A40, A41, A42, A43, A44, A45, A46, A47, A48, A49, A50, A51, A52, A53, A54, A55, A56, A57, A58, A59, A60, A61, A62, A63, A64, A65, A66, A67, A68, A69, A70, A71, A72, A73, A74, A75, A76, A77, A78, A79, A80, A81, A82, A83, A84, A85, A86, A87, A88, A89, A90, A91, A92, A93, A94, A95, A96, A97, A98, A99>(
  initial: R,
  ob1: Observable<A1>, pattern: (acc: R, value: A1) => R,
  ob2: Observable<A2>, pattern2: (acc: R, value: A2) => R,
  ob3: Observable<A3>, pattern3: (acc: R, value: A3) => R,
  ob4: Observable<A4>, pattern4: (acc: R, value: A4) => R,
  ob5: Observable<A5>, pattern5: (acc: R, value: A5) => R,
  ob6: Observable<A6>, pattern6: (acc: R, value: A6) => R,
  ob7: Observable<A7>, pattern7: (acc: R, value: A7) => R,
  ob8: Observable<A8>, pattern8: Pattern<R, A8>,
  ob9: Observable<A9>, pattern9: Pattern<R, A9>,
  ob10: Observable<A10>, pattern10: Pattern<R, A10>,
  ob11: Observable<A11>, pattern11: Pattern<R, A11>,
  ob12: Observable<A12>, pattern12: Pattern<R, A12>,
  ob13: Observable<A13>, pattern13: Pattern<R, A13>,
  ob14: Observable<A14>, pattern14: Pattern<R, A14>,
  ob15?: Observable<A15>, pattern15?: Pattern<R, A15>,
  ob16?: Observable<A16>, pattern16?: Pattern<R, A16>,
  ob17?: Observable<A17>, pattern17?: Pattern<R, A17>,
  ob18?: Observable<A18>, pattern18?: Pattern<R, A18>,
  ob19?: Observable<A19>, pattern19?: Pattern<R, A19>,
  ob20?: Observable<A20>, pattern20?: Pattern<R, A20>,
  ob21?: Observable<A21>, pattern21?: Pattern<R, A21>,
  ob22?: Observable<A22>, pattern22?: Pattern<R, A22>,
  ob23?: Observable<A23>, pattern23?: Pattern<R, A23>,
  ob24?: Observable<A24>, pattern24?: Pattern<R, A24>,
  ob25?: Observable<A25>, pattern25?: Pattern<R, A25>,
  ob26?: Observable<A26>, pattern26?: Pattern<R, A26>,
  ob27?: Observable<A27>, pattern27?: Pattern<R, A27>,
  ob28?: Observable<A28>, pattern28?: Pattern<R, A28>,
  ob29?: Observable<A29>, pattern29?: Pattern<R, A29>,
  ob30?: Observable<A30>, pattern30?: Pattern<R, A30>,
  ob31?: Observable<A31>, pattern31?: Pattern<R, A31>,
  ob32?: Observable<A32>, pattern32?: Pattern<R, A32>,
  ob33?: Observable<A33>, pattern33?: Pattern<R, A33>,
  ob34?: Observable<A34>, pattern34?: Pattern<R, A34>,
  ob35?: Observable<A35>, pattern35?: Pattern<R, A35>,
  ob36?: Observable<A36>, pattern36?: Pattern<R, A36>,
  ob37?: Observable<A37>, pattern37?: Pattern<R, A37>,
  ob38?: Observable<A38>, pattern38?: Pattern<R, A38>,
  ob39?: Observable<A39>, pattern39?: Pattern<R, A39>,
  ob40?: Observable<A40>, pattern40?: Pattern<R, A40>,
  ob41?: Observable<A41>, pattern41?: Pattern<R, A41>,
  ob42?: Observable<A42>, pattern42?: Pattern<R, A42>,
  ob43?: Observable<A43>, pattern43?: Pattern<R, A43>,
  ob44?: Observable<A44>, pattern44?: Pattern<R, A44>,
  ob45?: Observable<A45>, pattern45?: Pattern<R, A45>,
  ob46?: Observable<A46>, pattern46?: Pattern<R, A46>,
  ob47?: Observable<A47>, pattern47?: Pattern<R, A47>,
  ob48?: Observable<A48>, pattern48?: Pattern<R, A48>,
  ob49?: Observable<A49>, pattern49?: Pattern<R, A49>,
  ob50?: Observable<A50>, pattern50?: Pattern<R, A50>,
  ob51?: Observable<A51>, pattern51?: Pattern<R, A51>,
  ob52?: Observable<A52>, pattern52?: Pattern<R, A52>,
  ob53?: Observable<A53>, pattern53?: Pattern<R, A53>,
  ob54?: Observable<A54>, pattern54?: Pattern<R, A54>,
  ob55?: Observable<A55>, pattern55?: Pattern<R, A55>,
  ob56?: Observable<A56>, pattern56?: Pattern<R, A56>,
  ob57?: Observable<A57>, pattern57?: Pattern<R, A57>,
  ob58?: Observable<A58>, pattern58?: Pattern<R, A58>,
  ob59?: Observable<A59>, pattern59?: Pattern<R, A59>,
  ob60?: Observable<A60>, pattern60?: Pattern<R, A60>,
  ob61?: Observable<A61>, pattern61?: Pattern<R, A61>,
  ob62?: Observable<A62>, pattern62?: Pattern<R, A62>,
  ob63?: Observable<A63>, pattern63?: Pattern<R, A63>,
  ob64?: Observable<A64>, pattern64?: Pattern<R, A64>,
  ob65?: Observable<A65>, pattern65?: Pattern<R, A65>,
  ob66?: Observable<A66>, pattern66?: Pattern<R, A66>,
  ob67?: Observable<A67>, pattern67?: Pattern<R, A67>,
  ob68?: Observable<A68>, pattern68?: Pattern<R, A68>,
  ob69?: Observable<A69>, pattern69?: Pattern<R, A69>,
  ob70?: Observable<A70>, pattern70?: Pattern<R, A70>,
  ob71?: Observable<A71>, pattern71?: Pattern<R, A71>,
  ob72?: Observable<A72>, pattern72?: Pattern<R, A72>,
  ob73?: Observable<A73>, pattern73?: Pattern<R, A73>,
  ob74?: Observable<A74>, pattern74?: Pattern<R, A74>,
  ob75?: Observable<A75>, pattern75?: Pattern<R, A75>,
  ob76?: Observable<A76>, pattern76?: Pattern<R, A76>,
  ob77?: Observable<A77>, pattern77?: Pattern<R, A77>,
  ob78?: Observable<A78>, pattern78?: Pattern<R, A78>,
  ob79?: Observable<A79>, pattern79?: Pattern<R, A79>,
  ob80?: Observable<A80>, pattern80?: Pattern<R, A80>,
  ob81?: Observable<A81>, pattern81?: Pattern<R, A81>,
  ob82?: Observable<A82>, pattern82?: Pattern<R, A82>,
  ob83?: Observable<A83>, pattern83?: Pattern<R, A83>,
  ob84?: Observable<A84>, pattern84?: Pattern<R, A84>,
  ob85?: Observable<A85>, pattern85?: Pattern<R, A85>,
  ob86?: Observable<A86>, pattern86?: Pattern<R, A86>,
  ob87?: Observable<A87>, pattern87?: Pattern<R, A87>,
  ob88?: Observable<A88>, pattern88?: Pattern<R, A88>,
  ob89?: Observable<A89>, pattern89?: Pattern<R, A89>,
  ob90?: Observable<A90>, pattern90?: Pattern<R, A90>,
  ob91?: Observable<A91>, pattern91?: Pattern<R, A91>,
  ob92?: Observable<A92>, pattern92?: Pattern<R, A92>,
  ob93?: Observable<A93>, pattern93?: Pattern<R, A93>,
  ob94?: Observable<A94>, pattern94?: Pattern<R, A94>,
  ob95?: Observable<A95>, pattern95?: Pattern<R, A95>,
  ob96?: Observable<A96>, pattern96?: Pattern<R, A96>,
  ob97?: Observable<A97>, pattern97?: Pattern<R, A97>,
  ob98?: Observable<A98>, pattern98?: Pattern<R, A98>,
  ob99?: Observable<A99>, pattern99?: Pattern<R, A99>,
): Observable<R>;
export function update(initial, ...patterns) {
  return Observable.create(observer => {
    const streams = patterns.filter((_, i) => i % 2 === 0);
    const callbacks = patterns.filter((_, i) => i % 2 !== 0);
    let value = initial;
    const subscription = new Subscription();
    streams.forEach((_, i) => subscription.add(streams[i].subscribe(v => {
      value = callbacks[i](value, v);
      observer.next(value);
    })));

    return () => subscription.unsubscribe();
  });
}